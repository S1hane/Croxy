const IMAGE_URL_SETTINGS = {
  prefix: 'http://sdc.slconsulting.us/',
  fullImagePrefix: 'images/full_',
  thumbImagePrefix: 'thumbs/thumb_',
  suffix: '.jpg'
};

module.exports.formatOneRecord = (result) => {
  return new Promise((resolve, reject) => {
    resolve(modifyDatabaseResponseToMatchAPIFormat(result));
  });
};

const modifyDatabaseResponseToMatchAPIFormat = (response) => {
  let responseArray = response.slice(1, -1).split(',');
  let outputObject = {
    images: [],
    thumbs: [],
    favorite: (responseArray[3] === 't') ? true : false
  };
  let imagesOneToFour = (responseArray[0] === '0') ? '' : responseArray[0];
  let imagesFiveToEight = (responseArray[1] === '0') ? '' : responseArray[1];
  let imageNine = (responseArray[2] === '0') ? '' : responseArray[2];
  let totalLengthOfImageData = (imagesOneToFour.length + imagesFiveToEight.length + imageNine.length);
  let qtyOfImages = (Math.ceil(totalLengthOfImageData / 4));


  const convertImageIdsToFullImageUrls = () => {
    const injectImageAndThumbnailUrls = (id, index) => {
      id = Math.floor(id / 10); // adjust image url to match 1000 image dataset
      outputObject.images.push(`${IMAGE_URL_SETTINGS.prefix}${IMAGE_URL_SETTINGS.fullImagePrefix}${id}${IMAGE_URL_SETTINGS.suffix}`);
      outputObject.thumbs.push(`${IMAGE_URL_SETTINGS.prefix}${IMAGE_URL_SETTINGS.thumbImagePrefix}${id}${IMAGE_URL_SETTINGS.suffix}`);
    };

    if (qtyOfImages >= 1) {
      var lengthOfFirstImageInSet = (imagesOneToFour.length % 4);
      if (lengthOfFirstImageInSet !== 0) {
        injectImageAndThumbnailUrls(imagesOneToFour.substring(0, lengthOfFirstImageInSet), 1);
      } else {
        injectImageAndThumbnailUrls(imagesOneToFour.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 1);
        lengthOfFirstImageInSet = 4;
      }
    }
    if (qtyOfImages >= 2) {
      injectImageAndThumbnailUrls(imagesOneToFour.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 2);
    }
    if (qtyOfImages >= 3) {
      injectImageAndThumbnailUrls(imagesOneToFour.substring(lengthOfFirstImageInSet + 4, lengthOfFirstImageInSet + 8), 3);
    }
    if (qtyOfImages >= 4) {
      injectImageAndThumbnailUrls(imagesOneToFour.substring(lengthOfFirstImageInSet + 8, lengthOfFirstImageInSet + 12), 4);
    }
    if (qtyOfImages >= 5) {
      var lengthOfFirstImageInSet = (imagesFiveToEight.length % 4);
      if (lengthOfFirstImageInSet !== 0) {
        injectImageAndThumbnailUrls(imagesFiveToEight.substring(0, lengthOfFirstImageInSet), 5);
      } else {
        injectImageAndThumbnailUrls(imagesFiveToEight.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 1);
        lengthOfFirstImageInSet = 4;
      }
    }
    if (qtyOfImages >= 6) {
      injectImageAndThumbnailUrls(imagesFiveToEight.substring(lengthOfFirstImageInSet, lengthOfFirstImageInSet + 4), 6);
    }
    if (qtyOfImages >= 7) {
      injectImageAndThumbnailUrls(imagesFiveToEight.substring(lengthOfFirstImageInSet + 4, lengthOfFirstImageInSet + 8), 7);
    }
    if (qtyOfImages >= 8) {
      injectImageAndThumbnailUrls(imagesFiveToEight.substring(lengthOfFirstImageInSet + 8, lengthOfFirstImageInSet + 12), 8);
    }
    if (qtyOfImages >= 9) {
      injectImageAndThumbnailUrls(imageNine, 9);
    }
  };

  convertImageIdsToFullImageUrls();
  return outputObject;
};
