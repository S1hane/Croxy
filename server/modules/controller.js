const path = require('path');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));
const model = require(path.join(__dirname, 'models.js'));
const view = require(path.join(__dirname, 'views.js'));


module.exports.handleAPIrequest = (req, res, next) => {
  if (req.params.id) {
    model.returnOneRecord(req.params.id)
    .then( (result) => {
      view.sendReplyToRequestor(req, res, next, result);
    })
    .catch( e => errorHandler.log( e ) );
  } else {
    let error = "No item ID specified."
    view.sendError(req, res, next, error)
  }
};
