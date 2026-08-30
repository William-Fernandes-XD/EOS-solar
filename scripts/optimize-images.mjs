import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images/_raw");
const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

const jobs = [
  {
    src: "jpeg-013.jpg",
    name: "hero",
    width: 1920,
    quality: 78,
    alt: "Instalação fotovoltaica residencial vista de drone, com técnico sobre o telhado",
  },
  {
    src: "jpeg-003.jpg",
    name: "commercial-aerial",
    width: 1800,
    quality: 78,
  },
  {
    src: "jpeg-009.jpg",
    name: "office",
    width: 1600,
    quality: 80,
  },
  {
    src: "jpeg-023.jpg",
    name: "award",
    width: 1200,
    quality: 80,
  },
  {
    src: "jpeg-007.jpg",
    name: "panels-detail",
    width: 1400,
    quality: 80,
  },
  {
    src: "jpeg-011.jpg",
    name: "electrical",
    width: 1200,
    quality: 80,
  },
  {
    src: "jpeg-033.jpg",
    name: "ground-mount",
    width: 1600,
    quality: 78,
  },
  {
    src: "jpeg-035.jpg",
    name: "residential-roof",
    width: 1600,
    quality: 78,
  },
  {
    src: "jpeg-037.jpg",
    name: "commercial-roof",
    width: 1800,
    quality: 78,
  },
  {
    src: "jpeg-039.jpg",
    name: "ground-array",
    width: 1400,
    quality: 78,
  },
  {
    src: "jpeg-021.jpg",
    name: "brand-sky",
    width: 1400,
    quality: 80,
  },
  {
    src: "jpeg-019.jpg",
    name: "team-event",
    width: 1200,
    quality: 80,
    extract: { left: 0, top: 0, width: 1, height: 0.86 },
  },
  {
    src: "jpeg-017.jpg",
    name: "team-uniform",
    width: 1000,
    quality: 80,
    extract: { left: 0, top: 0, width: 1, height: 0.78 },
  },
];

async function run() {
  for (const job of jobs) {
    const input = path.join(root, job.src);
    const img = sharp(input);
    const meta = await img.metadata();
    let pipeline = sharp(input).rotate();

    if (job.extract && meta.width && meta.height) {
      pipeline = pipeline.extract({
        left: 0,
        top: 0,
        width: meta.width,
        height: Math.round(meta.height * job.extract.height),
      });
    }

    const webpPath = path.join(out, `${job.name}.webp`);
    const jpgPath = path.join(out, `${job.name}.jpg`);

    await pipeline
      .clone()
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 5 })
      .toFile(webpPath);

    await sharp(input)
      .rotate()
      .resize({ width: Math.min(job.width, 1600), withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(jpgPath);

    const info = await sharp(webpPath).metadata();
    console.log(
      `${job.name}.webp  ${info.width}x${info.height}  ${(fs.statSync(webpPath).size / 1024).toFixed(0)}kb`
    );
  }

  const hero = path.join(out, "hero.webp");
  await sharp(hero)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: 76 })
    .toFile(path.join("public", "og-image.webp"));

  await sharp(hero)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82 })
    .toFile(path.join("public", "og-image.jpg"));

  console.log("og-image ready");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
