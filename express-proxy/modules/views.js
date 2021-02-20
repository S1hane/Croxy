const path = require('path');

module.exports.sendReplyToRequestor = (req, res, next, reply) => {
  return new Promise ((resolve, reject) => {
    res.status(200);
    res.send(reply);
  });
};

module.exports.sendError = (req, res, next, error) => {
  res.status(500);
  res.send('ERROR:', error);
  next();
};
