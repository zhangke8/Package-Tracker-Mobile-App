var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); 
});

var app = express();

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  orderName: String,
  trackerId: String,
  price: Number,
  imageUrl: String
}, { collection: 'products' });

var Order = mongoose.model('products', OrderSchema, 'products');
var products = [
	 Order({
			orderName:"computer", 
			price:900.00, 
			trackerID:489712165498461165
		}),
	Order({
			orderName:"tablet", 
			price:300.00, 
			trackerID:789456232619849165
		}), 
	Order({
			orderName:"Ramen", 
			price:20.00,  
			trackerID:1321187986526548798
		}),
	item4 = new Order({
			orderName:"Shampoo", 
			price:10.00, 
			trackerID:62625198426165
		}),
	Order({
			orderName:"Car", 
			price:40000.00, 
			trackerID:784982062984984654
		})
 ];

mongoose.connect("mongodb://localhost:27017/PackageTracking", function (err, response) {
	if (err) { console.log(err); }
	else { console.log('Connected to ' + response); }
	
	for (i = 0; i < products.length; i++) {

		products[i].save((err)=>{
			if (err) throw err;
			console.log("inserted record");
		})
	}
});
