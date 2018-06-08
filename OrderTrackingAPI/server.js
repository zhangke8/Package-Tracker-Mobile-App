const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const morganBody = require('morgan-body');
const passport = require('passport');
const cors = require('cors');

require('./config/passport.js');

const orderRoute = require('./app/routes/orderRoute');
const itemRoute = require('./app/routes/itemRoute');
const authRoute = require('./app/routes/authenticationRoute');
const app = express();

//Port
const port = 8000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //change to *
  res.setHeader('Access-Control-Allow-Methods', '*'); //change to*
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
morganBody(app);

app.use(logger('dev'));
app.use(passport.initialize());
app.use('/api',orderRoute);
app.use('/api',itemRoute);
app.use('/api',authRoute);

//localhost:27017
const db1 = mongoose.connect("mongodb://database/Package-Tracker-Mobile-App-master", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db1, ' + ', response); }
});



//move up
/*
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //change to *
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); //change to*
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
*/



app.listen(port, function () {
    console.log('Example app listening on port 8000!');
  })




