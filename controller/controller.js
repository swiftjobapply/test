var asyncHandler = require('express-async-handler')
var db = require('../config/config.js')
var jwt = require('jsonwebtoken')
var config = require('../config/authConfig.js')
const path = require('path')
var getApplications = asyncHandler(async(req, res) => {
    db.query('SELECT * FROM swiftApplications', (err, result) => {
        if (err) {
            res
                .status(404)
                .send('error')
        } else {
            res
                .status(200)
                .send(result)
        }
    })
})
var createApplicant = asyncHandler(async(req, res) => {
    var {
        name,
        first,
        last,
        address,
        city,
        state,
        zipcode,
        email,
        ssn,
        employmentType,


    } = req.body
    console.log(req.body)
    var licenseFront = req.files.licenseFront.data.toString('base64')
    var licenseBack = req.files.licenseBack.data.toString('base64')
    var resume = req.files.resume.data.toString('base64')

    db.query('INSERT INTO swiftApplications SET ?', {
        name,
        first,
        last,
        address,
        city,
        state,
        zipcode,
        email,
        ssn,
        employmentType,
        licenseFront,
        licenseBack,
        resume


    }, (err, result) => {
        if (err) {
            console.log(err)
            res
                .status(404)
                .sendFile(path.join(__dirname, 'frontend', 'error.html'))
        } else {
            console.log('created')
            res
                .status(200)
                .sendFile(path.join(__dirname, 'frontend', 'congrats.html'))
        }
    })
})

var confirmAdmin = asyncHandler(async(req, res) => {
    console.log('satrt')
    var {
        username,
        password
    } = req.query
    console.log(req.query)
    db.query('SELECT * FROM admin', (err, resp) => {
        if (err) {
            res
                .status(404)
                .json({
                    status: 'error'
                })
        } else {
            console.log(resp[0])
            if (resp[0].username == username && resp[0].password == password) {
                res
                    .status(200)
                    .json({
                        status: 'correct',
                        token: jwt.sign({ username: resp[0].username }, config.secret, { expiresIn: 3600 })
                    })
            } else {
                res
                    .status(200)
                    .json({
                        status: 'incorrect',
                    })
            }
        }
    })
})


var adminPage = asyncHandler(async(req, res) => {
    res.sendFile(path.join(__dirname, "frontend", 'album.htm'))
})
module.exports = {
    getApplications,
    createApplicant,
    confirmAdmin,
    adminPage


}
