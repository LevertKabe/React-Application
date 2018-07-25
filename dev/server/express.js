const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postgres = require('pg');
const userRoutes = require('./user');
const cons = require('consolidate');
const dust = require('dustjs-helpers');
const pg = require('pg');
const path = require('path');

const router = express.Router();

app.use('/test', userRoutes);
//DB connection string 
var connect = "postgres://JobSeeker:Levert@31localhost/postgresdb"

//Assign Dust Engine to dust Files
app.engine('dust', cons.dust);

//Set Defaults Ext .dust

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

postgres.Connection

app.use('/user', userRoutes);

//Handle all requests for user
app.use((req, res, next) =>{
    //Custom message to handle page not found error
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    //For failed operations 
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;