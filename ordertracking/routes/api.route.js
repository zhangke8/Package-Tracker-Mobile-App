var express = require('express')

var router = express.Router()
var orders = require('./api/orders.route')


router.use('/orders', orders);


module.exports = router;