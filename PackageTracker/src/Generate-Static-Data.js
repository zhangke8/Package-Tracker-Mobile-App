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
			trackerID:489712165498461165, 
			imageUrl:"https://pisces.bbystatic.com/image2/BestBuy_US/store/ee/2015/com/pm/nav_desktops_1115.jpg"	
		}),
	Order({
			orderName:"tablet", 
			price:300.00, 
			trackerID:789456232619849165, 
			imageUrl:"https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2018/01/31/goods-img/1517356503798430531.jpg"
		}), 
	Order({
			orderName:"Ramen", 
			price:20.00,  
			trackerID:1321187986526548798, 
			imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51PXoeVnMWL.jpg"
		}),
	item4 = new Order({
			orderName:"Shampoo", 
			price:10.00, 
			trackerID:62625198426165, 
			imageUrl:"https://www.dollartree.com/assets/product_images_2016/styles/xlarge/433474.jpg"
		}),
	Order({
			orderName:"Car", 
			price:40000.00, 
			trackerID:784982062984984654, 
			imageUrl:"https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Magazine/04April/CRM-Cars-inline-TopTen-Toyota-Corolla-2018-4-18"
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
