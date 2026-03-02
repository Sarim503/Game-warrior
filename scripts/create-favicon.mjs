import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '../public/logo/logo.jpeg');
const imgDir = join(__dirname, '../public/img');

// Larger sizes = cleaner result; small sizes cause jagged lines on geometric logos
const sizes = [32, 48, 64, 128];
const buffers = await Promise.all(
  sizes.map((size) =>
    sharp(readFileSync(logoPath))
      .resize(size, size, { kernel: sharp.kernel.lanczos3 })
      .png()
      .toBuffer()
  )
);

mkdirSync(imgDir, { recursive: true });

// ICO for legacy support
const ico = await toIco(buffers);
writeFileSync(join(imgDir, 'favicon.ico'), ico);

// PNG at 64x64 for crisp display (modern browsers prefer PNG)
writeFileSync(join(imgDir, 'favicon.png'), buffers[2]); // 64x64

console.log('Favicon created: favicon.ico + favicon.png');
