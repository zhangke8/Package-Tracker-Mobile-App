var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
orderId:{
    type: String
},
orderName:{
    type: String
},
trackerId:{
    type: String
},
price: {
    type: String
},
url: {
    type: String
}
});


const Order = mongoose.model('order', orderSchema);
module.exports = Order;