var path = require('path')
var express = require('express')
var app = express()

var port = process.argv[2]
var renderFile = process.argv[3]
var folder = path.join(__dirname, 'public')
var HTMLfile = 'index.html'

app.use(require('stylus').middleware(renderFile))

app.use(express.static(renderFile))

app.listen(port)
