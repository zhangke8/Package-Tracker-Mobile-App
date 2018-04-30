const express = require('express');
const router = express.Router();
const Order = require('../../model/order')

router.route('/orders')

  .post(function(req, res){
    var newOrder = new Order(req.body);
    newOrder.save( function(err, data){
      if (err) {
        console.log(err);
        res.send(err);
      }
      else{
        res.send({data: "Record has been Inserted..!!"});
      }
    });
  })

  .get(function(req,res){
    Order.find({}, function(err, data){
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
      Order.findById(

      );
      res.send({data: "get get get"});
    })

    .delete(function(req, res){
      Order.remove({_id: req.params.order_id}, function(err){
        if(err){
          res.send(err);
        }
        else{
          res.send({data:"Record has been Deleted!!"});
        }
      })
    })
    
    .put(function(req, res){
      Order.findByIdAndUpdate(req.params.order_id, {trackerId: req.body.trackerId, price: req.body.price, orderStatus: req.body.orderStatus},
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
  
    router.route('/orders/items/:order_id')
    .get(function(req, res){
      res.send('Get order id');
    })
module.exports = router;