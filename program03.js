var express = require('express');
var process = require('process');
var path = require('path');
var app = express();
var pugFile = process.argv[3];
var port = process.argv[2];

app.set('views engine', 'pug');
app.set('views', process.argv[3]);
app.get('/home', (req, res)=>{
  res.render('index.pug', {date: new Date().toDateString()});
})

app.listen(port);
