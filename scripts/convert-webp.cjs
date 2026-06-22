/**
 * Convert app-screenshot PNGs → WebP at quality 82.
 * Uses the sharp instance already unplugged by yarn/Next.js.
 * Run via: node scripts/convert-webp.cjs  (plain node, bypasses PnP ESM resolver)
 */
"use strict";

const sharp = require("/Users/jellpd/app-promote/.yarn/unplugged/sharp-npm-0.34.5-dc08218742/node_modules/sharp/lib/index.js");
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../public/app-screenshot");

async function main() {
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".png"));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const src = path.join(srcDir, file);
    const dst = path.join(srcDir, path.basename(file, ".png") + ".webp");
    const sizeBefore = fs.statSync(src).size;

    await sharp(src).webp({ quality: 82 }).toFile(dst);

    const sizeAfter = fs.statSync(dst).size;
    totalBefore += sizeBefore;
    totalAfter += sizeAfter;

    const pct = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(
      `${file}: ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB (-${pct}%)`,
    );
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
