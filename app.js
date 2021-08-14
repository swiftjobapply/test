var express = require('express')
var fileUpload = require('express-fileupload');
var config = require('./config/config')
var dbConfig = require('./config/dbConfig')
var routes = require('./router/router')
var path=require('path')
var app = express()
app.use(express.static(path.join(__dirname,'frontend')))
app.use(fileUpload());
app.use('/swift', routes)
var port = process.env.PORT || 5000
app.listen(port)

app.get('/startSql',(req,res)=>{
  dbConfig()
  console.log('start')
res.send('creating')
})
