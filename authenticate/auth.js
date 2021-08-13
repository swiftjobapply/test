var jwt = require('jsonwebtoken')
var asyncHandler = require('express-async-handler')
var conf = require('../config/authConfig')

var print = (e) => console.log(e)

const protect = asyncHandler(async(req, res, next) => {
    var headerExists = req.headers.authorization
    if (headerExists) {
        var token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, conf.secret, (err, decoded) => {
            if (err) {
                print(err)
                res
                    .status(401)
                    .send('un authorized')

            } else {
                req.user = decoded.username
                next()
            }
        })

    } else {
        res
            .status(401)
            .send('no token no authorization')
    }
})
const protectDueToId = asyncHandler(async(req, res, next) => {
    var headerExists = req.params
    if (headerExists) {
        var token = req.params.id
        jwt.verify(token, conf.secret, (err, decoded) => {
            if (err) {
                print(err)
                res
                    .status(401)
                    .send('un authorized')

            } else {
                req.user = decoded.username
                next()
            }
        })

    } else {
        res
            .status(401)
            .send('no token no authorization')
    }
})


module.exports = {
    protect,
    protectDueToId
}
