<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    trackerId: String,
    price: Number,
    orderStatus: Number,
    orderItems: Schema.Types.Mixed
  }, { versionKey: false });


const Order = mongoose.model('order', OrderSchema,'order');
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    trackerId: String,
    price: Number,
    orderStatus: Number,
    orderItems: Schema.Types.Mixed
  }, { versionKey: false });


const Order = mongoose.model('order', OrderSchema,'order');
>>>>>>> loginbranch
module.exports = Order;