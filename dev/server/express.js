const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postgres = require('pg');
const userRoutes = require('./routes/api/user');
const cons = require('consolidate');
const dust = require('dustjs-helpers/lib/dust-helpers');
const pg = require('pg');
const path = require('path');

const router = express.Router();

app.use('/test', userRoutes);

//Assign Dust Engine to dust Files
app.engine('dust', cons.dust);

//Set Defaults Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


postgres.Connection

app.use('/user', userRoutes);

//Handle all requests ERRORS 404 and 500
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