// One-off asset optimizer.
// Resizes + recompresses everything under public/assets IN PLACE, keeping the
// same filename & extension so no code references change. Run after backing up
// to asset-originals/. Usage: node scripts/optimize-assets.mjs
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/assets");
const RESIZABLE = new Set([".png", ".jpg", ".jpeg", ".webp"]);

/** Max width (px) per asset, chosen from its real display size. Markers also cap height. */
function ruleFor(rel) {
  const p = rel.split(path.sep).join("/");
  const name = path.basename(p);
  if (p.includes("markers/") || name === "marker-icon-monjali.png")
    return { w: 160, h: 160, fit: "inside" }; // shown at 80px → 2x for retina
  if (name.startsWith("hero-image-")) return { w: 1600 };
  if (name.startsWith("paket-")) return { w: 800 };
  const small = ["avanza", "calya", "commuter", "inova", "primo", "raize", "atlas",
    "fortuner", "gambar-mobil", "heha-gambar", "borobudur-gambar", "merapilava-gambar",
    "parangtritis-gambar", "prambanan-gambar", "goapindul-gambar"];
  if (small.some((k) => name.startsWith(k))) return { w: 800 };
  return { w: 1280 }; // section images, covers, tugu-jogja, etc.
}

function encode(pipeline, ext) {
  if (ext === ".png") return pipeline.png({ palette: true, quality: 80, compressionLevel: 9, effort: 8 });
  if (ext === ".jpg" || ext === ".jpeg") return pipeline.jpeg({ quality: 80, mozjpeg: true });
  if (ext === ".webp") return pipeline.webp({ quality: 80 });
  return pipeline;
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (b) => (b / 1024).toFixed(0).padStart(6) + " KB";
let before = 0, after = 0, changed = 0;

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  const origSize = (await stat(file)).size;
  before += origSize;
  if (!RESIZABLE.has(ext)) { after += origSize; continue; }

  const rel = path.relative(ROOT, file);
  const rule = ruleFor(rel);
  const input = await readFile(file);
  const meta = await sharp(input).metadata();

  let pipe = sharp(input);
  const needsResize = rule.w && meta.width && meta.width > rule.w;
  if (needsResize) {
    pipe = pipe.resize({
      width: rule.w,
      height: rule.h,
      fit: rule.fit || "inside",
      withoutEnlargement: true,
    });
  }
  const out = await encode(pipe, ext).toBuffer();

  // Only overwrite when we actually saved bytes.
  if (out.length < origSize) {
    await writeFile(file, out);
    after += out.length;
    changed++;
    console.log(`${kb(origSize)} -> ${kb(out.length)}  ${rel}`);
  } else {
    after += origSize;
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`\nOptimized ${changed} files.`);
console.log(`Total: ${mb(before)} MB -> ${mb(after)} MB  (saved ${mb(before - after)} MB)`);
