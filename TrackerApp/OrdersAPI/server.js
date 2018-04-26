const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');
//var Item = require('./model/item')
var Order = require('./model/orders');
const app = express();
const routes = require('./app/routes/ordersRoute');
app.use(bp.json());
app.use('/api',routes);

app.use(cors);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

const port = 8000;

mongoose.connect('mongodb://localhost/OrdersDB');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.once('open', function(){
    console.log('Connected to MongoD11b');
})

db.on('error', (err) => {
console.log(err);
})

app.get('/', (res,req,next) => {
  console.log('Hello World');
})

app.listen(port, () => {
    console.log('We are live on' + ' ' + port);
})