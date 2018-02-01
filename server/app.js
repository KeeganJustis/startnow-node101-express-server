// import files and packages up here
var express= require('express');
var morgan= require('morgan');
var bodyParser = require('body-parser');
var data = require('./data.json');

// create your express server below
var app= express();

// add your routes and middleware below

app.use(express.static(__dirname + "/startnow-web101-san-diego-top-spots"));
app.use(morgan('dev'));

app.get("/data", function (request,response){
    response.type('json');
    response.end(JSON.stringify(data));

});

// app.get("/",function(request,response){
//     response.type('json');
//     response.end(JSON.stringify({}))

// })
app.get('/',function(request,response){
    response.send('hello');
})

// finally export the express application
module.exports = app;
