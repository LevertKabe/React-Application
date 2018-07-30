var knex = require('knex')({
    client: 'postgresql',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'Reverside11',
      database : 'tableTest',
      charset  : 'utf8'
    }
  });
  
  var bookshelf = require('bookshelf')(knex);
  
  var User = bookshelf.Model.extend({
    tableName: 'users'
  });