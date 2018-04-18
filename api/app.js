var MongoClient = require('mongodb').MongoClient;
const express = require("express");
const app = express();

const PORT = 8080;
app.listen(PORT, () => {});

MongoClient.connect('mongodb://localhost:4001/tracker', function (err, db) {
  if (err) throw err
  db.collection('orders').find(trackerid).toArray(function (err, result) {
    if (err) throw err
  })
})

// reloads browser
app.use(express.status('public'));

// get request to display package's tracking route
app.get('/tracker', (req, res, next) => {
	let trackerid = req.params.id;
	let data = MongoClient.connect('mongodb://localhost:4001/tracker', function (err, db) {
	  if (err) throw err
	  db.collection('orders').find(trackerid).toArray(function (err, result) {
		if (err) throw err
	  })
	}); // get data from mongodb
	if (data) {
		res.send(data);
	}
	else {
		res.status(404).send();
	}
});

// update product location
app.put('/tracker', (req, res, next) => {
	let trackerid = req.params.id;
	let data = MongoClient.connect('mongodb://localhost:4001/tracker', function (err, db) {
	  if (err) throw err
	  db.collection('orders').find(trackerid).toArray(function (err, result) {
		if (err) throw err
	  })
	}); // do proper mongodb checks on if index exists
	if (data) {
		let data; // get data from mongodb
		res.send(data);
	}
	else {
		res.status(404).send();
	}
});
