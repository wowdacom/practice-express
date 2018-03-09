//#program01
// Error connecting to http://localhost:25409/home: connect ECONNREFUSED 127.0.0.1:25409

// var express = require('express')
// var process = require('process')
// var app = express()
// var port = process.argv[2]
//
// app.get('/', function(req, res) {
//   res.redirect(301, '/home')
// })
//
// app.get('/home', function(req, res) {
//   res.end('Hello World!')
// })
//
// if (!module.parent) {
//   app.listen(port)
//   console.log(`Express started on port ${port}`);
// }

//#program02

// var express = require('express')
// var app = express()
// var port = process.argv[2]
// var HTMLfile = process.argv[3]
// var dirname = 'public'
//
// app.use(express.static(HTMLfile || path.join(__dirname, dirname)))
// app.listen(port)

//#program03
// var express = require('express');
// var process = require('process');
// var path = require('path');
// var app = express();
// var pugFile = process.argv[3];
// var port = process.argv[2];
//
// app.set('views engine', 'pug');
// app.set('views', process.argv[3]);
// app.get('/home', (req, res)=>{
//   res.render('index.pug', {date: new Date().toDateString()});
// })
//
// app.listen(port);

// #program04

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

// #program05
//
// var express = require('express')
// var app = express()
//
// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
//
//
// app.listen(process.argv[2])
//
//program06

// var express = require('express')
// var app = express()
// var port = process.argv[2]
//
// app.param('id', (req, res, next, id)=>{
//   req.id = id
//   next()
// })
//
// app.put('/message/:id', (req, res, next)=>{
//   var result = require('crypto')
//       .createHash('sha1')
//       .update(new Date().toDateString() + req.id)
//       .digest('hex')
//   res.send(result)
//   next()
// })
//
// app.listen(port)
//
//program7
//
// var express = require('express')
// var app = express()
//
// var port = process.argv[2]
//
// app.get('/search', (req, res)=>{
//   res.send(req.query)
// })
//
// app.listen(port)

//program8
var express = require('express')
var fs = require('fs')
var app = express()
var port = process.argv[2]
var fileToRead = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(fileToRead, 'utf8', (err, data)=>{
    if (err) throw err
    var result = JSON.parse(data)
    res.json(result)
  })
})

app.listen(port)
