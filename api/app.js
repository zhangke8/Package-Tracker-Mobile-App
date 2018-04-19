var MongoClient = require('mongodb').MongoClient;
var express = require("express");
var router = express.Router();
var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017';

const PORT = 27017;
app.listen(PORT, () => {});

// reloads browser
app.use(express.status('public'));

router.get('/', (req, res, next)=>{
	res.render('index');
});

router.get('/get-data', (req, res, next)=>{
	var results = [];
	mongo.connect(url, (err, db)=> {
		assert.equal(null, err);
		var pointer = db.collection('orders').find();
		pointer.forEach((doc, err)=>{
			assert.equal(null, err);
			result.push(doc);
		}, ()=>{
			db.close();
			res.render('index', {orders: results});
		});
	});
});

router.post('/insert', (req, res, next)=>{
	var order = {
		name: req.body.name,
		img: req.body.img,
		price: req.body.price,
		locate: req.body.locate
	};

	mongo.connect(url, (err, db)=> {
		assert.equal(null, err);
		db.collection('orders').insertOne(order, (err, result)=>{
			assert.equal(null, err);
			console.log('item inserted');
			db.close();
		});
	});

	res.redirect('/');
});