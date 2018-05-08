var OrderService = require('../services/orders.service')
_this = this


exports.getOrders = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var orders = await OrderService.getOrders({}, page, limit)
        return res.status(200).json({status: 200, data: orders, message: "Succesfully Order Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}