/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const express = require('express');

const path = require('path');

const Item = require('../database/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

app.get('/api/items/:id', async (req, res) => {
  Item.findOne({
    _id: req.params.id,
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

app.get('/api/items', async (req, res) => {
  Item.findOne({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

app.post('/api/items/:id', async (req, res) => {
  Item.create({
    _id: req.body._id,
    images: req.body.images,
    thumbs: req.body.thumbs,
    favorite: req.body.favorite,
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.send(err));
});

app.put('/api/items/:id', async (req, res) => {
  Item.findOneAndDelete({
    _id: req.body._id,
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.send(err));
});

app.patch('/api/items/:id', async (req, res) => {
  Item.findOneAndUpdate({ _id: req.params.id }, {
    favorite: !req.body.favorite,
  })
    .then(() => res.sendStatus(204))
    .catch((err) => res.send(err));
});

module.exports = app;
