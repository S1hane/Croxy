/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://database/itemlist', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  _id: Number,
  images: Array,
  thumbs: Array,
  favorite: Boolean,
});

const Item = mongoose.model('Item', schema);

module.exports = db;
module.exports = Item;
