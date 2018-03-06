var express = require('express')
var app = express()
var port = process.argv[2]
var HTMLfile = process.argv[3]
var dirname = 'public'

app.use(express.static(HTMLfile || path.join(__dirname, dirname)))
app.listen(port)
