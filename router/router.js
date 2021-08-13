var express = require('express')
var router = express.Router()
var p = require('../authenticate/auth.js')
var cntrl = require('../controller/controller')

router
    .route('/applications')
    .get(p.protect, cntrl.getApplications)
    .post(cntrl.createApplicant)
router
    .route('/confirm/admin')
    .post(cntrl.confirmAdmin)
router
    .route('/:id/admin')
    .get(p.protectDueToId, cntrl.adminPage)

module.exports = router
