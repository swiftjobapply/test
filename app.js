var express = require('express')
var fileUpload = require('express-fileupload');
var config = require('./config/config')
var routes = require('./router/router')
var app = express()
app.use(fileUpload());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use('/swift', routes)
var port = 8000
app.listen(port)
app.get('/',(req,res)=>{
res.send('choke ooo')
})
app.get('/mofu',(req,res)=>{
res.send('mofu')
})
