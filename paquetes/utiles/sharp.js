const sharp = require('sharp');

sharp('imgjs.png')
  .resize(200, 200)
  .grayscale()
  .toFile('imgjs-resized.png');