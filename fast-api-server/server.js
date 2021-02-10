const path = require('path');
const fastify = require('fastify')();
const views = require(path.join(__dirname, 'modules', 'views.js'));
const DATABASE_URL = 'postgres://student:student@172.31.94.114/postgres';
const port = 3004;
require('newrelic');


fastify.register(require('fastify-postgres'), {
  connectionString: DATABASE_URL
});

fastify.get('/api/items/:id', (req, reply) => {
  const onConnect = async (err, client, release) => {
    if (err) { return reply.send(err); }
    client.query(
      'SELECT (i1_4, i5_8, i9, fav) FROM images WHERE id =$1', [req.params.id],
      function onResult (err, result) {
        release();
        views.formatOneRecord(result.rows[0].row)
          .then((formattedRecord) => {
            reply.send(err || formattedRecord);
          });
      }
    );
  };
  fastify.pg.connect(onConnect);
});

fastify.listen(port, '0.0.0.0', function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Sever is listening on ${address}`);
});
