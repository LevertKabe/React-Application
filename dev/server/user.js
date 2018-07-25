const express  = require('express');
const router = express.Router();
var pg = require('pg');
const knex = require('./knexMiddle.js')

var options = { 
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'Levert',
    password: ''

  }; 


var connectionString = process.env.DATABASE_URL || 'postgres://JobSeeker:localhost:5432';


//Handle incoming requests to /user
router.get('/:name/:password', (req, res, next) =>{
    const name = req.params.name
    console.log(name);
    res.status(200).json({
        message: "Successful POST"
    });
});

router.post('/', (req, res, next) =>{
    
    connection.query("INSERT INTO 'names' (name) VALUES Levert ")
    res.status(200).json({
        message: "POST data found"
    });
});

//GET Method
router.get('/:name', function(req, res) {
    //knex.select().from('employee_name').timeout(1000);
    knex.select().table('Employee').timeout(1000)
    .then(res)(
        function(){
            return req.json(res);
        }
    )

    // var results = [];

    // // Get a Postgres client from the connection pool
    // pg.connect(options, function(err, client, done) {
    //     // Handle connection errors
    //     if(err) {
    //       done();
    //       console.log(err);
    //       return res.status(500).json({ success: false, data: err});
    //     }

    //     // SQL Query > Select Data
    //     var query = client.query("SELECT * FROM employee_name;");

    //     // Stream results back one row at a time
    //     query.on('row', function(row) {
    //         results.push(row);
    //     });

    //     // After all data is returned, close connection and return results
    //     query.on('end', function() {
    //         done();
    //         return res.json(results);
    //     });

    // });

});

module.exports = router;