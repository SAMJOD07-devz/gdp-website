#!/usr/bin/env node
/**
 * Image optimization script for GD Pandya Associates website.
 * Converts all key images to WebP format with size optimizations.
 * Run: node scripts/optimize-images.js
 */
import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'assets');

const imageConfigs = [
  // Root assets
  { src: 'hero-legal.jpg',         dest: 'hero-legal.webp',         width: 1920, height: 1080, quality: 82 },
  { src: 'logo.png',               dest: 'logo.webp',               width: 400,  height: null, quality: 90 },
  { src: 'logo-icon.png',          dest: 'logo-icon.webp',          width: 200,  height: null, quality: 90 },
  { src: 'business-card.jpeg',     dest: 'business-card.webp',      width: 800,  height: null, quality: 85 },
  { src: 'office-building.jpeg',   dest: 'office-building.webp',    width: 800,  height: null, quality: 82 },
  // Team photos
  { src: 'team/dinesh-pandya.jpeg',        dest: 'team/dinesh-pandya.webp',        width: 600, height: 800,  quality: 85 },
  { src: 'team/gaurav-pandya-office.jpeg', dest: 'team/gaurav-pandya-office.webp', width: 900, height: null, quality: 85 },
  { src: 'team/gaurav-pandya.jpeg',        dest: 'team/gaurav-pandya.webp',        width: 600, height: 800,  quality: 85 },
  { src: 'team/falguni-pandya.jpg',        dest: 'team/falguni-pandya.webp',       width: 600, height: 800,  quality: 82 },
  { src: 'team/drashti-abhangi.jpg',       dest: 'team/drashti-abhangi.webp',      width: 600, height: 800,  quality: 82 },
  { src: 'team/khyati-bhatt.jpg',          dest: 'team/khyati-bhatt.webp',         width: 600, height: 800,  quality: 82 },
  { src: 'team/alifiya-vaghela.jpg',       dest: 'team/alifiya-vaghela.webp',      width: 600, height: 800,  quality: 82 },
];

// Favicon sizes from logo
const faviconConfigs = [
  { dest: path.join(__dirname, '..', 'public', 'favicon-192.png'), size: 192 },
  { dest: path.join(__dirname, '..', 'public', 'favicon-512.png'), size: 512 },
  { dest: path.join(__dirname, '..', 'public', 'apple-touch-icon.png'), size: 180 },
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const config of imageConfigs) {
    const srcPath = path.join(publicDir, config.src);
    const destPath = path.join(publicDir, config.dest);

    if (!existsSync(srcPath)) {
      console.log(`⚠️  SKIP (not found): ${config.src}`);
      skipped++;
      continue;
    }

    try {
      // Ensure dest directory exists
      await mkdir(path.dirname(destPath), { recursive: true });

      let pipeline = sharp(srcPath);
      if (config.width || config.height) {
        pipeline = pipeline.resize(config.width, config.height, {
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      const info = await pipeline
        .webp({ quality: config.quality })
        .toFile(destPath);

      const srcSize = (await import('fs')).statSync(srcPath).size;
      const destSizeKB = Math.round(info.size / 1024);
      const srcSizeKB = Math.round(srcSize / 1024);
      const saving = Math.round((1 - info.size / srcSize) * 100);

      console.log(`✅ ${config.src} → ${config.dest}`);
      console.log(`   ${srcSizeKB}KB → ${destSizeKB}KB (${saving}% smaller, ${info.width}×${info.height})\n`);
      processed++;
    } catch (err) {
      console.error(`❌ ERROR processing ${config.src}:`, err.message);
      errors++;
    }
  }

  // Generate favicons from logo
  console.log('🎨 Generating favicon PNGs from logo.png...\n');
  const logoSrc = path.join(publicDir, 'logo.png');
  if (existsSync(logoSrc)) {
    for (const fav of faviconConfigs) {
      const destPath = path.join(publicDir, fav.dest);
      try {
        await mkdir(path.dirname(destPath), { recursive: true });
        await sharp(logoSrc)
          .resize(fav.size, fav.size, { fit: 'contain', background: { r: 247, g: 250, b: 252, alpha: 1 } })
          .png()
          .toFile(destPath);
        console.log(`✅ Favicon ${fav.size}×${fav.size} → ${path.basename(fav.dest)}`);
      } catch (err) {
        console.error(`❌ Favicon error:`, err.message);
      }
    }
  }

  console.log(`\n📊 Summary: ${processed} optimized, ${skipped} skipped, ${errors} errors.`);
  console.log('Done! Update your JSX files to use .webp extensions.\n');
}

optimizeImages().catch(console.error);
