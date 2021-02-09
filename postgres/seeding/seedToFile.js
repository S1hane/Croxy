const path = require('path');
const fs = require('fs');
const OUTPUT_FILE_PATH = path.join(__dirname, 'postgres');
const OUTPUT_FILE_NAME = 'seedfile.txt';
const NUMBER_OF_SEED_RECORDS = 490000000;

const writeSeedDataToDisk = (maxRecordsGenerated) => {
  const filePath = OUTPUT_FILE_PATH + OUTPUT_FILE_NAME;
  const seedFilePrefix = 'INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES\n';

  fs.writeFileSync(filePath, seedFilePrefix);

  const generateRandomSeedRecord = () => {
    const returnRandomImageValues = () => {
      const numOfImages = Math.floor((Math.random() * (9 - 1) + 1));
      let imagesString = '';

      if (numOfImages === 1) {
        imagesString = `${Math.floor(Math.random() * (9999 - 1) + 1)}, 0, 0`;
      }
      if (numOfImages === 2) {
        imagesString = `${Math.floor(Math.random() * (99999999 - 1) + 1)}, 0, 0`;
      }
      if (numOfImages === 3) {
        imagesString = `${Math.floor(Math.random() * (999999999999 - 1) + 1)}, 0, 0`;
      }
      if (numOfImages === 4) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, 0, 0`;
      }
      if (numOfImages === 5) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, ${Math.floor(Math.random() * (9999))}, 0`;
      }
      if (numOfImages === 6) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, ${Math.floor(Math.random() * (99999999))}, 0`;
      }
      if (numOfImages === 7) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, ${Math.floor(Math.random() * (999999999999))}, 0`;
      }
      if (numOfImages === 8) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, ${Math.floor(Math.random() * (9999999999999999))}, 0`;
      }
      if (numOfImages === 9) {
        imagesString = `${Math.floor(Math.random() * (9999999999999999 - 1) + 1)}, ${Math.floor(Math.random() * (9999999999999999))}, ${Math.floor(Math.random() * 9999)}`;
      }

      return imagesString;
    };
    const returnFavoriteValue = () => {
      if (Math.random() < 0.05) {
        return 't';
      } else {
        return 'f';
      }
    };
    const returnAndIncrementRecordIDNumber = () => {
      currentRecordID += 1;
      return currentRecordID;
    };
    const returnEndingCharacter = () => {
      if (currentRecordID === maxRecordsGenerated) {
        return ';';
      } else {
        return ',';
      }
    };
    return (`(${returnAndIncrementRecordIDNumber()}, ${returnRandomImageValues()}, '${returnFavoriteValue()}')${returnEndingCharacter()}\n`);
  };

  var currentRecordID = 10000001;
  for (let i = 0; i < maxRecordsGenerated; i++) {
    fs.appendFileSync(filePath, generateRandomSeedRecord());
  }
};

writeSeedDataToDisk(NUMBER_OF_SEED_RECORDS);
