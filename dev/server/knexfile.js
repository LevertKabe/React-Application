module.exports ={
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'Levert',
      password : '',
      database : 'postgres',
      charset: 'utf8'
    },
    // migrations: {
    //   directory: __dirname + '/knex/migrations',
    // },
    // seeds: {
    //   directory: __dirname + '/knex/seeds'
    // }
  }
}