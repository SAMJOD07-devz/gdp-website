import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoSrc = path.join(__dirname, '..', 'public', 'assets', 'logo.png');
const publicDir = path.join(__dirname, '..', 'public');

const sizes = [
  { name: 'favicon-192.png', size: 192 },
  { name: 'favicon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];
for (const s of sizes) {
  try {
    await sharp(logoSrc)
      .resize(s.size, s.size, { fit: 'contain', background: { r: 247, g: 250, b: 252, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, s.name));
    console.log(`✅ Generated ${s.name} (${s.size}px)`);
  } catch(e) { console.error(`❌ ${s.name}:`, e.message); }
}

