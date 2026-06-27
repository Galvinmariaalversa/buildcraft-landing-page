const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'public';

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  console.log('Starting image optimization...');
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    const filePath = path.join(publicDir, file);
    const baseName = path.basename(file, '.png');
    const destWebpPath = path.join(publicDir, `${baseName}.webp`);
    
    // Check if it's an avatar
    if (baseName.startsWith('avatar_')) {
      // Resize avatars to 128x128 WebP
      await sharp(filePath)
        .resize(128, 128)
        .webp({ quality: 85 })
        .toFile(destWebpPath);
      console.log(`Optimized avatar ${file} -> 128x128 WebP`);
    } else if (baseName === 'hero_bg') {
      // Hero bg is LCP: compress it well
      await sharp(filePath)
        .webp({ quality: 80, effort: 6 })
        .toFile(destWebpPath);
      console.log(`Optimized hero background ${file} -> WebP`);
    } else {
      // Other general company images and project images (1024x1024)
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(destWebpPath);
      console.log(`Optimized ${file} -> WebP`);
    }
  }
  console.log('Image optimization completed.');
}

optimizeImages().catch(console.error);
