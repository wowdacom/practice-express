var express = require('express')
var app = express()

app.set('view engine', 'pug')
res.render('index', {data: new Date().toDateString()})
