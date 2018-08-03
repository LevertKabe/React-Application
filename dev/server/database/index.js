//Setup database connection with help of knex
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'Levert',
      password : '',
      database : 'jobseeker',
      charset: 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'mass'
});

module.exports = knex;