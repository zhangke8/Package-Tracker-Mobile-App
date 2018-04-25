var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); 
});

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res, next)=>{
	res.render('index');
});

app.use('/api', router);
var Schema = mongo.Schema;

var OrderSchema = new Schema({
  orderName: String,
  trackerId: String,
  price: Number,
  imageUrl: String
}, { versionKey: false });

var Orders = mongo.model('orders', OrderSchema,'orders');

var db = mongo.connect("mongodb://localhost:27017/PackageTracking", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db, ' + ', response); }
});

router.get('/get-data', (req, res, next)=>{
	var results = [];
	mongo.connect(url, (err, db)=>{
		assert.equal(null, err);
		var pointer = db.collection('catalog').find();
		pointer.forEach((doc, err)=>{
			assert.equal(null, err);
			results.push(doc);
		}, ()=>{
			db.close();
			res.render('index', {products: results});
		});
	});
});

router.post('/insert', (req, res, next)=>{
	var products = [
		{name:"computer", price:900.00, imageUrl:"https://pisces.bbystatic.com/image2/BestBuy_US/store/ee/2015/com/pm/nav_desktops_1115.jpg", orderID:4561237978, trackerID:489712165498461165},
		{name:"tablet", price:300.00, imageUrl:"https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2018/01/31/goods-img/1517356503798430531.jpg", orderID:7896526526, trackerID:789456232619849165},
		{name:"Ramen", price:20.00, imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51PXoeVnMWL.jpg", orderID:7894651313, trackerID:1321187986526548798},
		{name:"Shampoo", price:10.00, imageUrl:"https://www.dollartree.com/assets/product_images_2016/styles/xlarge/433474.jpg", orderID:789326545986, trackerID:62625198426165},
		{name:"Car", price:40000.00, imageUrl:"https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Magazine/04April/CRM-Cars-inline-TopTen-Toyota-Corolla-2018-4-18", orderID:8481611894, trackerID:784982062984984654}	];
	
	mongo.connect(url, (err, db)=>{
		assert.equal(null, err);
		db.collection('catalog').insertMany(products, (err, result)=>{
			assert.equal(null, err);
			db.close();
		})
	})
	res.redirect('/');
});

