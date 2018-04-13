const express = require("express");
const app = express();

const PORT = 4001;
app.listen(PORT, () => {});

// reloads browser
app.use(express.status('public'));

// get request to display package's tracking route
app.get('/tracker', (req, res, next) => {
	let trackerid = req.params.id;
	let data; // get data from mongodb
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
	let exist; // do proper mongodb checks on if index exists
	if (exist) {
		let data; // get data from mongodb
		res.send(data);
	}
	else {
		res.status(404).send();
	}
});

// create new package info
app.post('/tracker', (req, res, next) => {

	// generate proper object to store in mongodb
	let data = {
		"trackeringID" = app.params.trackerId,
		"productName" = app.params.productName,
		"location" = app.params.location
	}; 
	
	if (data) {
		// add record to mongodb
		res.status(201).send(data);
	}
	else {
		res.status(404).send();
	}
	
});