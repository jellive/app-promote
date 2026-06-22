/**
 * Convert app-screenshot PNGs → WebP at quality 82.
 * Run via: yarn node scripts/convert-webp.mjs
 */
import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, basename, extname } from "path";

const srcDir = new URL("../public/app-screenshot", import.meta.url).pathname;

const files = readdirSync(srcDir).filter((f) => f.endsWith(".png"));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(srcDir, file);
  const dst = join(srcDir, basename(file, ".png") + ".webp");
  const sizeBefore = statSync(src).size;

  await sharp(src).webp({ quality: 82 }).toFile(dst);

  const sizeAfter = statSync(dst).size;
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
