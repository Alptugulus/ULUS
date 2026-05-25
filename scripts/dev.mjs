#!/usr/bin/env node
/**
 * Stable dev server: single instance, macOS-friendly file watching, auto-recover cache.
 * `npm run dev` — çalışan sunucuya dokunmaz; dosyayı kaydedin → HMR yansır.
 * `npm run dev:restart` — zorla yeniden başlat (yalnızca gerektiğinde).
 * `npm run dev:reset` — .next temizle + yeniden başlat.
 */
import {
  rmSync,
  existsSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
} from "node:fs";
import { createRequire } from "node:module";
import { spawn, execSync } from "node:child_process";
import http from "node:http";
import net from "node:net";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT) || 3000;
const URL = `http://${HOST}:${PORT}/`;
const LOCK_FILE = ".ulus-dev.lock.json";
const CWD = process.cwd();
const FORCE_RESTART = process.env.ULUS_DEV_RESTART === "1";
const FORCE_CLEAN = process.env.ULUS_DEV_FORCE === "1";
const POLL_MS = process.env.WATCHPACK_POLLING_INTERVAL || "500";
const USE_POLLING =
  process.env.WATCHPACK_POLLING === "true" ||
  (process.env.WATCHPACK_POLLING !== "false" &&
    process.platform === "darwin");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function raiseFileLimit() {
  try {
    execSync("ulimit -n 10240", { shell: true, stdio: "ignore" });
  } catch {
    /* unsupported */
  }
}

function readLock() {
  if (!existsSync(LOCK_FILE)) return null;
  try {
    return JSON.parse(readFileSync(LOCK_FILE, "utf8"));
  } catch {
    return null;
  }
}

function writeLock(pid) {
  writeFileSync(
    LOCK_FILE,
    JSON.stringify(
      { pid, cwd: CWD, port: PORT, host: HOST, startedAt: Date.now() },
      null,
      2
    )
  );
}

function removeLock() {
  if (existsSync(LOCK_FILE)) {
    try {
      unlinkSync(LOCK_FILE);
    } catch {
      /* ignore */
    }
  }
}

function isOurLock(lock) {
  return Boolean(lock && lock.cwd === CWD && lock.port === PORT);
}

function portTaken() {
  return new Promise((resolve) => {
    const probe = net.createServer();
    probe.once("error", () => resolve(true));
    probe.once("listening", () => {
      probe.close(() => resolve(false));
    });
    probe.listen(PORT, HOST);
  });
}

function probeServer() {
  return new Promise((resolve) => {
    const req = http.get(URL, (res) => {
      const ok = res.statusCode === 200;
      res.resume();
      resolve(ok);
    });
    req.on("error", () => resolve(false));
    req.setTimeout(2500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

function stopStaleServers() {
  try {
    execSync('pkill -f "next dev" 2>/dev/null || true', { stdio: "ignore" });
  } catch {
    /* none */
  }
}

function cleanNextCache() {
  if (existsSync(".next")) {
    rmSync(".next", { recursive: true, force: true });
    console.log("✓ .next önbelleği temizlendi\n");
  }
}

/** HMR/runtime hatası sonrası bozulan Turbopack önbelleği */
const CORRUPT_CACHE_RE =
  /ENOENT.*(?:app-build-manifest\.json|build-manifest\.json|_buildManifest)/;

/** macOS/Turbopack: .tmp manifest kaybolunca HMR durur, eski CSS servis edilir */
const WATCH_ERROR_RE =
  /watch error|app-build-manifest\.json\.tmp/i;

const HMR_STALL_RE =
  /(?:Failed to compile|Cannot find module|Module not found|Turbopack.*error)/i;

function startDevServer() {
  let recovering = false;
  let healthChecked = false;

  writeLock(process.pid);

  const child = spawn(
    process.execPath,
    [nextBin, "dev", "-H", HOST, "-p", String(PORT), "--turbopack"],
    {
      stdio: ["inherit", "inherit", "pipe"],
      cwd: CWD,
      env: {
        ...process.env,
        WATCHPACK_POLLING: USE_POLLING ? "true" : "false",
        WATCHPACK_POLLING_INTERVAL: USE_POLLING ? POLL_MS : undefined,
        /** macOS native watcher limiti (20) büyük projelerde HMR'ı kesebilir */
        WATCHPACK_WATCHER_LIMIT:
          process.env.WATCHPACK_WATCHER_LIMIT ||
          (process.platform === "darwin" ? "128" : undefined),
        CHOKIDAR_USEPOLLING: USE_POLLING ? "true" : undefined,
        CHOKIDAR_INTERVAL: USE_POLLING ? POLL_MS : undefined,
      },
    }
  );

  const scheduleHealthCheck = () => {
    if (healthChecked || recovering) return;
    healthChecked = true;
    setTimeout(async () => {
      if (recovering) return;
      const ok = await probeServer();
      if (!ok) {
        recovering = true;
        console.log(
          "\n⚠ Rotalar yüklenemedi (404) — .next temizlenip yeniden başlatılıyor…\n"
        );
        child.kill("SIGTERM");
      }
    }, 4500);
  };

  const onDevOutput = (chunk) => {
    const text = chunk.toString();
    process.stderr.write(chunk);
    if (recovering) return;
    if (text.includes("Ready in")) scheduleHealthCheck();
    if (CORRUPT_CACHE_RE.test(text) || WATCH_ERROR_RE.test(text)) {
      recovering = true;
      console.log(
        "\n⚠ Bozuk .next önbelleği / dosya izleyici hatası — temizlenip yeniden başlatılıyor…\n"
      );
      child.kill("SIGTERM");
    }
  };

  child.stderr.on("data", onDevOutput);
  child.stdout?.on?.("data", (chunk) => {
    const text = chunk.toString();
    process.stdout.write(chunk);
    if (!recovering && HMR_STALL_RE.test(text)) {
      console.log(
        "\n💡 Derleme hatası görüldü — düzeltip kaydedin. Hâlâ yansımıyorsa: npm run dev:reset\n"
      );
    }
  });

  const shutdown = () => {
    removeLock();
    child.kill("SIGTERM");
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  child.on("exit", (code, signal) => {
    removeLock();
    if (recovering) {
      cleanNextCache();
      setTimeout(() => startDevServer(), 600);
      return;
    }
    if (signal === "SIGTERM" || signal === "SIGINT") {
      process.exit(0);
    }
    process.exit(code ?? 0);
  });

  return child;
}

async function main() {
  raiseFileLimit();

  const lock = readLock();
  const serverUp = await probeServer();
  const portBusy = await portTaken();

  if (serverUp && lock && !isOurLock(lock) && !FORCE_RESTART) {
    console.log(`⚠ Port ${PORT} başka bir süreçte (bu proje değil).`);
    console.log(`  ${URL} — o projeyi kullanın veya: npm run dev:restart\n`);
    return;
  }

  /** Varsayılan: çalışan sunucuyu öldürme — kayıt → tarayıcıda HMR */
  if (!FORCE_RESTART && !FORCE_CLEAN && serverUp) {
    console.log(`✓ Dev sunucusu çalışıyor: ${URL}`);
    console.log("  Yeni geliştirmeler için dosyayı kaydedin — restart gerekmez.");
    console.log("  Tarayıcıda sayfa kendini günceller (Fast Refresh).");
    console.log("  Takılırsa: npm run dev:restart  |  Önbellek: npm run dev:reset\n");
    return;
  }

  const needsRestart = FORCE_RESTART || FORCE_CLEAN;

  if (needsRestart) {
    const foreign =
      serverUp && lock && !isOurLock(lock)
        ? " (port başka bir projede olabilir)"
        : "";
    console.log(`↻ Dev sunucusu yeniden başlatılıyor${foreign}…\n`);
    stopStaleServers();
    removeLock();
    await sleep(450);
    if (FORCE_CLEAN) cleanNextCache();
  } else if (portBusy && !serverUp) {
    console.log("↻ Port meşgul ama yanıt yok — eski süreç temizleniyor…\n");
    stopStaleServers();
    removeLock();
    await sleep(450);
  }

  if (USE_POLLING) {
    console.log(
      `✓ macOS dosya izleme: polling (${POLL_MS}ms) — kaydettiğinizde HMR\n`
    );
  }

  console.log(`▶ Next.js dev (Turbopack) → ${URL}`);
  console.log("  Bu terminali açık bırakın; kodu kaydedin — restart gerekmez.");
  console.log("  Tekrar `npm run dev` çalıştırmak sunucuyu yeniden başlatmaz.");
  console.log("  Takılırsa: npm run dev:restart  |  npm run dev:reset");
  console.log("  CSS HMR sorunu: npm run dev:webpack\n");

  startDevServer();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
