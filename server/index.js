const path = require('path');
const express = require('express');
const controller = require(path.join(__dirname, 'modules', 'controller.js'));
const app = express();
const port = 3004;

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res
//     .status(200)
//     .send('Hello from Proxy.');
// });
// app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/items/:id', controller.handleAPIrequest);


// app.post('/api/items/:id', async (req, res) => {
//   Item.create({
//     _id: req.body._id,
//     images: req.body.images,
//     thumbs: req.body.thumbs,
//     favorite: req.body.favorite,
//   })
//     .then(() => res.sendStatus(201))
//     .catch((err) => res.send(err));
// });

// app.put('/api/items/:id', (req, res) => {
//   Item.findOneAndDelete({
//     _id: req.body._id,
//   })
//     .then(() => res.sendStatus(201))
//     .catch((err) => res.send(err));
// });

// app.patch('/api/items/:id', async (req, res) => {
//   Item.findOneAndUpdate({ _id: req.params.id }, {
//     favorite: !req.body.favorite,
//   })
//     .then(() => res.sendStatus(204))
//     .catch((err) => res.send(err));
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

