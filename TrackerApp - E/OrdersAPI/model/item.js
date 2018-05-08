
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
title:{
    type: String
} 
});


const Item = mongoose.model('item', itemSchema);
module.exports = Item;