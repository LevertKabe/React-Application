//Express is a light-weight web application framework to 
//help organize your web application into an MVC architecture on the server side
const express  = require('express');
const router = express.Router();
var pg = require('pg');
const knex = require('../../database');


//API to GET all job seeker
router.get('/getAllEmployees', function(req,res){
    knex.select().from('employee').then(function(employeeName){
        res.send(employeeName);
    })
});

//API to register a job seeker/potential employee
router.post('/registerEmployee', (req, res, next) =>{
    const name = req.params.name
    knex.insert(req.body).returning('*').into('employee').then(function(data){
        res.send(data);
    })
});

//API to login particular job seeker
router.get('/loginEmployee/:username', (req, res, next) =>{
    const username = req.params.username;
    
    knex('employee').where('username',username ).then(function(data){
        res.send(data);
    })
});



//API to SEARCH a job based on a category or by certain keyword
router.get('/searchJob/:keyword', (req, res, next) =>{
    const keywords = req.params.keyword;
    
    knex('job').where('category', 'LIKE', '%' + keywords + '%').then(function(data){
        res.send(data);
    })
});


//API to register a job seeker/potential employee
router.post('/applyForJob', (req, res, next) =>{
    const name = req.params.name
    knex.insert(req.body).returning('*').into('job_seeker_application').then(function(data){
        res.send(data);
    })
});

//=========================================Company APIs=================================

module.exports = router;