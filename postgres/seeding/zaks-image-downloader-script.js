const fs = require('fs');
const fetch = require('node-fetch');
const searchOptions = {
  imageWidth: "1280",
  imageHeight: "1024",
  imagePrefix: "full_",
  numberOfImages: "1000",
  filePrefix: "full_",
  directory: "./downloads",
  keywords: ['product']
}
async function saveImagesToDisk( {imageWidth, imageHeight, imagePrefix, numberOfImages, filePrefix, directory, keywords} ) {
  keywords = keywords.join(',');
  for (let i = 1; i <= numberOfImages; i++) {
    const response = await fetch(`https://loremflickr.com/${imageWidth}/${imageHeight}/${keywords}`);
    const buffer = await response.buffer();
    fs.writeFile(`${directory}/${filePrefix}${i}.jpg`, buffer, () =>
    console.log(`Downloaded ${i} out of ${numberOfImages}...`));
  }
};
saveImagesToDisk(searchOptions);
