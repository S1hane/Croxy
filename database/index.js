/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let databaseURL = 'mongodb://localhost/related';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

if (process.env.NODE_ENV === 'production') {
  databaseURL = process.env.databaseURI;
  options.user = process.env.databaseUser;
  options.pass = process.env.databasePass;
}

const db = mongoose.connect(databaseURL, options)
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log('Mongo connection error:', err));

const schema = new mongoose.Schema({
  _id: Number,
  images: Array,
  thumbs: Array,
  favorite: Boolean,
});

const Item = mongoose.model('Item', schema);

module.exports = db;
module.exports = Item;
