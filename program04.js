var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')

var app = express()
var root = path.join(__dirname, 'public')
var port = process.argv[2]
var dirname = 'public'
var form = 'form.html'

app.use(bodyparser.urlencoded({extended: false}))

// app.use('/form', express.static(root),
//   (req, res)=>{
//     var myOgj = req.body
//     // res.sendFile(path.join(root, 'form.html'))
//   })

app.post('/form', function (req, res) {
  if (!req.body) {
    return res.sendStatus(200)
  } else {
    res.send(req.body.str.split('').reverse().join(''))
  }
})

app.listen(process.argv[2])

// #answer
// var express = require('express')
//     var bodyParser = require('body-parser')
//     var app = express()
//
//     app.use(bodyParser.urlencoded({extended: false}))
//
//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })
//
//     app.listen(process.argv[2])
