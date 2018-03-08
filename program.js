//program8
var express = require('express')
var fs = require('fs')
var app = express()
var port = process.argv[2]
var fileToRead = process.argv[3]

fs.readFile(fileToRead, (err, data)=>{
  if (err) throw err
  return data
})

app.get('/books', (req, res)=>{
  fs.readFile(fileToRead, 'utf8', (err, data)=>{
    if (err) throw err
    var result = JSON.parse(data)
    res.json(result)
  })
})

app.listen(port)
