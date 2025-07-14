const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    url: 'https://ext.same-assets.com/2961363719/831278686.svg',
    filename: 'cursor-logo.svg',
    folder: 'logos'
  },
  {
    url: 'https://ext.same-assets.com/2961363719/2422319831.svg',
    filename: 'brex-logo.svg',
    folder: 'logos'
  },
  {
    url: 'https://ext.same-assets.com/2961363719/3591619035.svg',
    filename: 'remote-logo.svg',
    folder: 'logos'
  },
  // Add more images...
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

async function downloadAll() {
  for (const img of images) {
    const filepath = path.join('public', 'images', img.folder, img.filename);
    try {
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`Failed to download ${img.filename}:`, error.message);
    }
  }
}

downloadAll();
