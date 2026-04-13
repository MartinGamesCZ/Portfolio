import { readFile, writeFile } from "fs/promises";
import sharp from "sharp";

const original = await readFile("./input.jpg");

const s = sharp(original).resize(128, 128).greyscale().negate();

const { data, info } = await s.raw().toBuffer({ resolveWithObject: true });

const dotSize = 32;
const width = info.width * dotSize;
const height = info.height * dotSize;

const canvas = Buffer.alloc(width * height * 4, 0);

for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const brightness = data[y * info.width + x];

    const radius = Math.round(dotSize / 5);

    for (let dy = 0; dy < dotSize; dy++) {
      for (let dx = 0; dx < dotSize; dx++) {
        const cx = dotSize / 2;
        const cy = dotSize / 2;
        const isActive =
          (dx - cx) ** 2 + (dy - cy) ** 2 <= radius ** 2 && brightness > 20;

        const idx = ((y * dotSize + dy) * width + (x * dotSize + dx)) * 4;
        const value = isActive ? brightness : 0;

        canvas[idx] = value;
        canvas[idx + 1] = value;
        canvas[idx + 2] = value;
        canvas[idx + 3] = isActive ? 255 : 0;
      }
    }
  }
}

const output = await sharp(canvas, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toBuffer();

await writeFile("./output.png", output);
