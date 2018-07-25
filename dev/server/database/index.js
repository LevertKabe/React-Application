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

module.exports = knex;
