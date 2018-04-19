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


const port = 8000;

mongoose.connect('mongodb://localhost/OrdersDB');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.once('open', function(){
    console.log('Connected to MongoDb');
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