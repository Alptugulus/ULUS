#!/usr/bin/env node
/**
 * Catches invalid <motion> JSX tags (common typo for <div>).
 * Framer Motion only allows <motion.div>, <motion.span>, etc.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const INVALID_OPEN = /<motion(?![.\w])/g;
const INVALID_CLOSE = /<\/motion>/g;
/** <motion.div> without framer-motion import → "motion is not defined" + 500 */
const MOTION_ELEMENT = /<motion\.\w+/;
const MOTION_IMPORT = /from\s+["']framer-motion["']/;
const USE_CLIENT = /["']use client["']/;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      walk(path, files);
    } else if (/\.(tsx|jsx)$/.test(entry)) {
      files.push(path);
    }
  }
  return files;
}

let failed = false;

for (const file of walk("src")) {
  const source = readFileSync(file, "utf8");
  if (INVALID_OPEN.test(source) || INVALID_CLOSE.test(source)) {
    console.error(`\n✖ Invalid JSX in ${file}`);
    console.error("  Use <motion.div> (Framer) or <div> (HTML), not bare <motion>.");
    failed = true;
    continue;
  }

  if (MOTION_ELEMENT.test(source)) {
    if (!MOTION_IMPORT.test(source)) {
      console.error(`\n✖ ${file}`);
      console.error(
        '  <motion.*> kullanılıyor ama `import { motion } from "framer-motion"` yok.'
      );
      console.error("  Sunucu bileşeninde animasyon için MotionReveal kullanın.");
      failed = true;
      continue;
    }
    if (!USE_CLIENT.test(source)) {
      console.error(`\n✖ ${file}`);
      console.error('  <motion.*> yalnızca "use client" dosyalarında kullanılabilir.');
      console.error("  Sunucu bileşeninde MotionReveal / MotionItem kullanın.");
      failed = true;
    }
  }
}

if (failed) {
  console.error("\nFix invalid tags before running dev/build.\n");
  process.exit(1);
}

console.log("✓ JSX check passed");
