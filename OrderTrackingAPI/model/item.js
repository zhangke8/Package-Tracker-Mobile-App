<<<<<<< HEAD

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    imageUrl: String,
    added: Number
}, { versionKey: false });


const Item = mongoose.model('item', ItemSchema, 'item');
=======

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    imageUrl: String,
    added: Number
}, { versionKey: false });


const Item = mongoose.model('item', ItemSchema, 'item');
>>>>>>> loginbranch
module.exports = Item;