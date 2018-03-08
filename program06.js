//program06

var express = require('express')
var app = express()
var port = process.argv[2]

app.param('id', (req, res, next, id)=>{
  req.id = id
  next()
})

app.put('/message/:id', (req, res, next)=>{
  var result = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.id)
      .digest('hex')
  res.send(result)
  next()
})

app.listen(port)
