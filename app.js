var express = require('express')
var path = require('path')
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser')
var config = require('./config/config')
var routes = require('./router/router')
var app = express()
app.use(fileUpload());
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use('/swift', routes)
app.use(express.static(path.join(__dirname, "frontend")))
var port = process.env.PORT || 2000
app.listen(port)