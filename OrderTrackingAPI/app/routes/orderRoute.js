<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Order = require('../../model/order')
const Item = require('../../model/item')
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
      Order.findById(req.params.order_id, function(err, data){
        if (err) {
          res.send(err);
        }
        else{
          console.log("length:" + Object.keys(data.orderItems).length);
          let retData  = [];
          let index = 0;
          Object.keys(data.orderItems).forEach(function(key) {
            Item.findById(key, function(err,itemData){
              // console.log('retData push');
              const stringifedIem = JSON.stringify(itemData);
              const parsedItem = JSON.parse(stringifedIem);
              parsedItem.quantity = data.orderItems[key];
              retData.push(parsedItem);
              index += 1;
              // console.log('retData : inside loop' +  JSON.stringify(retData));
              if (index == Object.keys(data.orderItems).length) {
                res.send(retData);
              }
            });
          })
        }
      });
    })
=======
const express = require('express');
const router = express.Router();
const Order = require('../../model/order')
const Item = require('../../model/item')
router.route('/orders')

  .post(function(req, res){
    const newOrder = new Order(req.body);
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
      Order.findById(req.params.order_id, function(err, data){
        if (err) {
          res.send(err);
        }
        else{
          console.log("length:" + Object.keys(data.orderItems).length);
          let retData  = [];
          let index = 0;
          Object.keys(data.orderItems).forEach(function(key) {
            Item.findById(key, function(err,itemData){
              // console.log('retData push');
              const stringifedIem = JSON.stringify(itemData);
              const parsedItem = JSON.parse(stringifedIem);
              parsedItem.quantity = data.orderItems[key];
              retData.push(parsedItem);
              index += 1;
              // console.log('retData : inside loop' +  JSON.stringify(retData));
              if (index == Object.keys(data.orderItems).length) {
                res.send(retData);
              }
            });
          })
        }
      });
    })
>>>>>>> loginbranch
module.exports = router;