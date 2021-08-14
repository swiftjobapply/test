var db = require('./config')

function start() {
    var sql1 = `CREATE TABLE applications (
        name VARCHAR(100),
        first VARCHAR(160),
        last VARCHAR(160),
        address VARCHAR(160),
        city VARCHAR(60),
        state VARCHAR(60),
        zipcode INT(20),
        email VARCHAR(60),
        ssn INT(9),
        employmentType VARCHAR(60),
        licenseFront LONGTEXT(4200000000),
        licenseBack LONGTEXT(4200000000),
        resume LONGTEXT(4200000000)
    
)`
    var sql2 = `CREATE TABLE admin (
   
	username VARCHAR(60),
	password VARCHAR(60),
	
)`

    var sql3 = `INSERT INTO admin SET?`
    db.query(sql1)
    db.query(sql2)
    db.query(sql3, {
        username: 'Tmariam',
        password: 'password1234'
    })
}


module.exports = start
