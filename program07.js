//program7

var express = require('express')
var app = express()

var port = process.argv[2]

app.get('/search', (req, res)=>{
  res.send(req.query)
})

app.listen(port)
