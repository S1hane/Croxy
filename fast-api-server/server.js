const port = 3004;
const fastify = require('fastify')();
const path = require('path');
const DATABASE_URL = (process.env.DATABASE_URL) ? process.env.DATABASE_URL : 'postgres://student:student@3.235.173.226/postgres';

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
        reply.send(err || result.rows[0].row);
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
