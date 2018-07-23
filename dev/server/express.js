const express = require('express');
const app = express();
const morgan = require('morgan');

const userRoutes = require('./user');

app.use(morgan('dev'))

app.use('/user', userRoutes);

//Handle all requests for user
app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    //For failed operations 
    res.status(err.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;