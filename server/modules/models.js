const path = require('path');
const db = require(path.join(__dirname, 'database.js'));
const IMAGE_URL_SETTINGS = {
  prefix: 'http://sdc.slconsulting.us/',
  fullImagePrefix: 'images/full_',
  thumbImagePrefix: 'thumbs/thumb_',
  suffix: '.jpg'
};
module.exports.returnOneRecord = (requestedID) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT (i1_4, i5_8, i9, fav) FROM images WHERE id = ${requestedID};`;
    let options = {
      type: db.QueryTypes.SELECT
    };
    db.sequelize.query(query, options)
      .then((result) => {
        resolve(modifyDatabaseResponseToMatchAPIFormat(result));
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const modifyDatabaseResponseToMatchAPIFormat = (response) => {
  let responseArray = response[0].row.slice(1, -1).split(',');
  let outputObject = {
    images: [],
    thumbs: [],
    favorite: (responseArray[3] === 't') ? true : false
  };
  let images1_4 = (responseArray[0] === '0') ? '' : responseArray[0];
  let images5_8 = (responseArray[1] === '0') ? '' : responseArray[1];
  let image9 = (responseArray[2] === '0') ? '' : responseArray[2];
  let totalLengthOfImageData = (images1_4.length + images5_8.length + image9.length);
  let qtyOfImages = (Math.ceil(totalLengthOfImageData / 4));
  const convertImageIdsToFullImageUrls = () => {
    if (qtyOfImages >= 1) {
      var lengthOfFirstImageInSet = (images1_4.length % 4);
      if (lengthOfFirstImageInSet !== 0) {
        injectImageAndThumbnailUrls(images1_4.substring(0, lengthOfFirstImageInSet), 1);
      } else {
        injectImageAndThumbnailUrls(images1_4.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 1);
        lengthOfFirstImageInSet = 4;
      }
    }
    if (qtyOfImages >= 2) {
      injectImageAndThumbnailUrls(images1_4.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 2);
    }
    if (qtyOfImages >= 3) {
      injectImageAndThumbnailUrls(images1_4.substring(lengthOfFirstImageInSet + 4, lengthOfFirstImageInSet + 8), 3);
    }
    if (qtyOfImages >= 4) {
      injectImageAndThumbnailUrls(images1_4.substring(lengthOfFirstImageInSet + 8, lengthOfFirstImageInSet + 12), 4);
    }
    if (qtyOfImages >= 5) {
      var lengthOfFirstImageInSet = (images5_8.length % 4);
      if (lengthOfFirstImageInSet !== 0) {
        injectImageAndThumbnailUrls(images5_8.substring(0, lengthOfFirstImageInSet), 5);
      } else {
        injectImageAndThumbnailUrls(images5_8.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 1);
        lengthOfFirstImageInSet = 4;
      }
    }
    if (qtyOfImages >= 6) {
      injectImageAndThumbnailUrls(images5_8.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 6);
    }
    if (qtyOfImages >= 7) {
      injectImageAndThumbnailUrls(images5_8.substring(lengthOfFirstImageInSet + 4, lengthOfFirstImageInSet + 8), 7);
    }
    if (qtyOfImages >= 8) {
      injectImageAndThumbnailUrls(images5_8.substring(lengthOfFirstImageInSet + 8, lengthOfFirstImageInSet + 12), 8);
    }
    if (qtyOfImages >= 9) {
      injectImageAndThumbnailUrls(image9, 9);
    }
  };
  injectImageAndThumbnailUrls = (id, index) => {
    id = Math.floor(id / 10); // adjust image url to match 1000 image dataset
    outputObject.images.push(`${IMAGE_URL_SETTINGS.prefix}${IMAGE_URL_SETTINGS.fullImagePrefix}${id}${IMAGE_URL_SETTINGS.suffix}`);
    outputObject.thumbs.push(`${IMAGE_URL_SETTINGS.prefix}${IMAGE_URL_SETTINGS.thumbImagePrefix}${id}${IMAGE_URL_SETTINGS.suffix}`);
  };
  convertImageIdsToFullImageUrls();
  return outputObject;
};
