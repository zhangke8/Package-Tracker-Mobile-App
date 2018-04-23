var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var logger = require('morgan');
var morganBody = require('morgan-body');

var db = mongo.connect("mongodb://localhost/PackageTracking", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db, ' + ', response); }
});

var app = express();
app.use(bodyParser.json());
morganBody(app);
app.use(logger('dev'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var router = express.Router(); 

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); 
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

router.route('/orders')
    .post(function(req,res){
      console.log('post /api/orders');
      var newOrder = new Orders(req.body);
      newOrder.save( function(err, data){
        if (err) {
          console.log(err);
          res.send(err);
        }
        else{
          console.log("send data back");
          res.send({data: "Record has been Inserted..!!"});
        }
      });
    })
    .get(function(req,res){
      Orders.find({}, function(err, data){
        if (err) {
          res.send(err);
        }
        else {
          res.send(data);
        }
      });
    });

router.route('/orders/:order_id')
    .get(function(req, res){
      res.send({data: "get get get"});
    })
    .delete(function(req, res){
      Orders.remove({_id: req.params.order_id}, function(err){
        if(err){
          res.send(err);
        }
        else{
          res.send({data:"Record has been Deleted!!"});
        }
      })
    })
    .put(function(req, res){
      Orders.findByIdAndUpdate(req.params.order_id, {orderName: req.body.orderName, trackerId: req.body.trackerId, price: req.body.price, imageUrl: req.body.imageUrl},
        function(err, data){
          if (err){
            res.send(err);
          }
          else{
            res.send({data: "Record has been Updated..!!"});
          }
        }
      );
    })

app.listen(8000, function () {

  console.log('Example app listening on port 8000!');
})
