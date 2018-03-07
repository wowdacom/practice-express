var express = require('express')
var path = require('path')
var app = express()
var port = 3310
var dirname = 'public'
var form = 'form.html'

app.use('/form', express.static(path.join(__dirname, 'public')))

app.post('/path', (req, res)=>{
  var bodyparser = require('body-parser')
  app.use(bodyparser.urlencoded({extended: false}))
})

app.listen(port, ()=>{
  console.log('Server connecting : http://localhost:3310/form')
})
