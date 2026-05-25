import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const useWebpackDev = process.env.ULUS_WEBPACK === "1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    qualities: [75, 90, 100],
  },
  /** macOS: dosya kaydı → HMR (restart gerekmez) */
  watchOptions: {
    pollIntervalMs: 500,
  },
  turbopack: {
    root,
  },
  /** Dev'de tarayıcı önbelleği değişiklikleri gizlemesin */
  async headers() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
        ],
      },
    ];
  },
};

/** Yalnızca `npm run dev:webpack` — Turbopack dev'de webpack tanımlı olmamalı */
if (useWebpackDev) {
  nextConfig.webpack = (config, { dev }) => {
    if (dev) {
      config.cache = false;
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }
    return config;
  };
}

export default nextConfig;
