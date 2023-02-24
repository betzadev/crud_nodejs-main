const express = require('express');
const app = express();
const debug = require('debug')('example:server');
const http = require('http');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));


module.exports = app;