var mysql=require('mysql')

var db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'swiftjobs'
})
db.connect(err=>{
	if(err){
		 console.log('not connected')
	}else{
          console.log('connected')
	}
})
module.exports=db
