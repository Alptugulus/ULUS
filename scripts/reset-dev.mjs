#!/usr/bin/env node
/**
 * Stops dev server, removes corrupted .next cache, starts fresh with Turbopack.
 */
import { rmSync, existsSync, unlinkSync } from "node:fs";
import { spawn, execSync } from "node:child_process";

const LOCK_FILE = ".ulus-dev.lock.json";

try {
  execSync('pkill -f "next dev" 2>/dev/null || true', { stdio: "ignore" });
} catch {
  /* not running */
}

if (existsSync(LOCK_FILE)) {
  try {
    unlinkSync(LOCK_FILE);
  } catch {
    /* ignore */
  }
}

rmSync(".next", { recursive: true, force: true });
console.log("✓ Removed .next cache\n");

const child = spawn("node", ["scripts/dev.mjs"], {
  stdio: "inherit",
  shell: false,
  cwd: process.cwd(),
});

child.on("exit", (code) => process.exit(code ?? 0));
