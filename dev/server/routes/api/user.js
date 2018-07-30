const express  = require('express');
const router = express.Router();
var pg = require('pg');
const knex = require('../../database');

//API to return all potential employees
router.get('/getAllEmployees', function(req,res){
    knex.select().from('employee').then(function(employeeName){
        res.send(employeeName);
    })
});

router.post('/registerEmployee', (req, res, next) =>{
    const name = req.params.name
    console.log(req.body);
    knex.insert(req.body).returning('*').into('employee').then(function(data){
        res.send(data);
    })
});

router.get('/loginEmployee/:username', (req, res, next) =>{
    const username = req.params.username;
    
    knex('employee').where('username',username ).then(function(data){
        res.send(data);
    })
});

router.get('/searchJob/:keyword', (req, res, next) =>{
    const keywords = req.params.keyword;
    
    knex('company').where('company_category', 'LIKE', '%' + keywords + '%').then(function(data){
        res.send(data);
    })
});


//GET Method
router.get('/:name', function(req, res) {
    //knex.select().from('employee_name').timeout(1000);
    knex.select().from('employee').then(function(employeeName){
        res.send(employeeName);
    })
});
module.exports = router;