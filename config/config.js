var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'mysql-5-8f08.hostman.site',
    user: 'hostman',
    port: "3313",
    password: "af9e4237",
    database: 'database'
})
db.connect(err => {
    if (err) {
        console.log('not connected')
    } else {
        console.log('connected')
    }
})
module.exports = db
