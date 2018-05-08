var Order = require('../models/order.model')

_this = this

exports.getOrders = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var orders = await Order.paginate(query, options)
        return orders;
    } catch (e) {
        throw Error('Error while Paginating Orders')
    }
}