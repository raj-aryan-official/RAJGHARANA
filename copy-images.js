import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'RAJ-GHARANA');
const targetDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// List of image files to copy
const imageFiles = [
  'logo.png',
  'front.jpg',
  'shop.jpg',
  'lehenga.jpg',
  'saree.jpg',
  'suit.jpg',
  'bridal.jpg',
  'designer.jpg',
  'banarasi.jpg',
  'kaanjivaram.jpg',
  'chiffon.jpg',
  'silk.jpg',
  'anarkalisuit.jpg',
  'palazzo.jpg',
  'patiala.jpg',
  'churidar.jpg',
  'anarkali.jpg',
  'sharara.jpg'
];

// Copy each image file
imageFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${file} to public folder`);
  } else {
    console.log(`Warning: ${file} not found in source directory`);
  }
}); 