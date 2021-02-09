const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const { DataTypes } = require('sequelize');

// Option 1: Passing a connection URI
sequelize = new Sequelize('postgres://student:student@localhost:5432/postgres', {
});
//   logging: (...msg) => console.log(msg)

sequelize.authenticate()
  .then((result) => {
    console.log('DB connection OK!');
  })
  .catch((error) => {
    console.log('DB connection error:', error);
  });

  sequelize.define('images', {
    i1_4: {
      type: DataTypes.BIGINT
    },
    i5_8: {
      type: DataTypes.BIGINT
    },
    i9: {
      type: DataTypes.SMALLINT
    },
    fav: {
      type: DataTypes.BOOLEAN
    }
  });

module.exports.sequelize = sequelize;
module.exports.QueryTypes = QueryTypes;
