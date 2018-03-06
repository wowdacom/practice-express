// Error connecting to http://localhost:25409/home: connect ECONNREFUSED 127.0.0.1:25409

var express = require('express')
var process = require('process')
var app = express()
var port = process.argv[2]

app.get('/', function(req, res) {
  res.redirect(301, '/home')
})

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

if (!module.parent) {
  app.listen(port)
  console.log(`Express started on port ${port}`);
}
