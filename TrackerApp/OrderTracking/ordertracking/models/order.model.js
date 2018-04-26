var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var OrderSchema = new mongoose.Schema({
    orderId: String,
    orderName: String,
    trackerId: String,
    price: Number,
    imageUrl: String
})

OrderSchema.plugin(mongoosePaginate)
const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;