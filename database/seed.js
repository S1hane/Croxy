/* eslint-disable no-console */
const faker = require('faker');

const Item = require('./index.js');

const addImageArray = () => {
  const imageAmount = Math.floor(Math.random() * (7 - 3) + 3);
  const imageArray = [];
  for (let i = 0; i < imageAmount; i += 1) {
    imageArray.push(faker.image.image());
  }
  return imageArray;
};

const addFakeNames = () => {
  const names = [{
    _id: 0,
    images: [
      'https://i.etsystatic.com/9820983/r/il/221b7e/2714714234/il_1588xN.2714714234_kkio.jpg',
      'https://i.etsystatic.com/9820983/r/il/1536ca/2762394747/il_794xN.2762394747_kobm.jpg',
      'https://i.etsystatic.com/9820983/r/il/ba429b/2762394797/il_794xN.2762394797_9xcz.jpg',
    ],
    thumbs: [
      'https://i.etsystatic.com/9820983/d/il/221b7e/2714714234/il_75x75.2714714234_kkio.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/1536ca/2762394747/il_75x75.2762394747_kobm.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/ba429b/2762394797/il_75x75.2762394797_9xcz.jpg?version=0',
    ],
    favorite: false,
  },
  {
    _id: 100,
    images: [
      'https://i.etsystatic.com/9820983/r/il/221b7e/2714714234/il_1588xN.2714714234_kkio.jpg',
      'https://i.etsystatic.com/9820983/r/il/1536ca/2762394747/il_794xN.2762394747_kobm.jpg',
      'https://i.etsystatic.com/9820983/r/il/ba429b/2762394797/il_794xN.2762394797_9xcz.jpg',
      'https://i.etsystatic.com/9820983/r/il/221b7e/2714714234/il_1588xN.2714714234_kkio.jpg',
      'https://i.etsystatic.com/9820983/r/il/1536ca/2762394747/il_794xN.2762394747_kobm.jpg',
      'https://i.etsystatic.com/9820983/r/il/ba429b/2762394797/il_794xN.2762394797_9xcz.jpg',
      'https://i.etsystatic.com/9820983/r/il/221b7e/2714714234/il_1588xN.2714714234_kkio.jpg',
      'https://i.etsystatic.com/9820983/r/il/1536ca/2762394747/il_794xN.2762394747_kobm.jpg',
      'https://i.etsystatic.com/9820983/r/il/ba429b/2762394797/il_794xN.2762394797_9xcz.jpg',
    ],
    thumbs: [
      'https://i.etsystatic.com/9820983/d/il/221b7e/2714714234/il_75x75.2714714234_kkio.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/1536ca/2762394747/il_75x75.2762394747_kobm.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/ba429b/2762394797/il_75x75.2762394797_9xcz.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/221b7e/2714714234/il_75x75.2714714234_kkio.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/1536ca/2762394747/il_75x75.2762394747_kobm.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/ba429b/2762394797/il_75x75.2762394797_9xcz.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/221b7e/2714714234/il_75x75.2714714234_kkio.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/1536ca/2762394747/il_75x75.2762394747_kobm.jpg?version=0',
      'https://i.etsystatic.com/9820983/d/il/ba429b/2762394797/il_75x75.2762394797_9xcz.jpg?version=0',
    ],
    favorite: false,
  }];
  for (let i = 1; i < 99; i += 1) {
    const pics = addImageArray();
    names.push({
      _id: i,
      images: pics,
      thumbs: pics,
      favorite: faker.random.boolean(),
    });
  }
  return names;
};

const fakeNames = addFakeNames();

const insertFakeNames = () => {
  Item.create(fakeNames)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

insertFakeNames();
