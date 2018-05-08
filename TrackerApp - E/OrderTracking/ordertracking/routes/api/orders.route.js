var express = require('express')

var router = express.Router()

var OrderController = require('../../controllers/orders.controller');

router.get('/',OrderController.getOrders)

module.exports = router;