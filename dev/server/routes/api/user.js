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
    
    knex('company').where('company_category', 'LIKE', '%' + keywords + '%').then(function(data){
        res.send(data);
    })
});


//=========================================Company APIs=================================

//API to return all 
router.get('/getAllCompanies', function(req,res){
    knex.select().from('company').then(function(data){
        res.send(data);
    })
});

//API to register a company
router.post('/registerCompany', (req, res, next) =>{
    const name = req.params.name
    knex.insert(req.body).returning('*').into('employee').then(function(data){
        res.send(data);
    })
});


//API to login a company using company name
router.get('/loginCompany/:company_name', (req, res, next) =>{
    const company_name = req.params.company_name;
    knex('company').where('company_name',company_name ).then(function(data){
        res.send(data);
    })
});

//API to login a company using company name
router.get('/searchJobSeeker/:keyword', (req, res, next) =>{
    const keywords = req.params.keyword;
    
    knex('company').where('company_category', 'LIKE', '%' + keywords + '%').then(function(data){
        res.send(data);
    })
});

//API to add a job post
router.post('/addJob', (req, res, next) =>{
    const name = req.params.name
    console.log(req.body);
    knex.insert(req.body).returning('*').into('job').then(function(data){
        res.send(data);
    })
});

router.get('/getJobForCompany/:company_name', function(req,res){
    const company_name = req.params.company_name;
    knex.select().from('job').where('company_name', 'LIKE', '%' + company_name + '%').then(function(data){
        res.send(data);
    })
});



module.exports = router;