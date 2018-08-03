const express  = require('express');
const router = express.Router();
var pg = require('pg');
const knex = require('../../database');

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
router.get('/loginCompany/:username', (req, res, next) =>{
    const username = req.params.username;
    knex('employee').where('username',username ).then(function(data){
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