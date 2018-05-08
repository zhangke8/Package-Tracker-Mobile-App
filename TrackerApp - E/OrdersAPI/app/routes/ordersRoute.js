const express = require('express');
const router = express.Router();
const order = require('../../model/orders')

// Get a list of orders from the DB
router.get('/orders', function(req,res,next){
  
    order.find({}).then(function(orders){
        res.send(orders);
    }); 
    //res.send({type: 'GET'});
});


router.post('/orders', function(req,res,next){
    order.create(req.body).then(function(order){  //Creates new instance of order object locally then saves it the DB, also returns a promise
       res.send(order);
     }).catch(next);  
 });
 
 //Update a ninja in the DB
router.put('/orders/:id', function(req,res,next){
    order.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      order.findOne({_id: req.params.id}).then(function(order){        //re-find ninja in DB
        res.send(order);
      });
      });
    });


    //Delete
    router.delete('/order/:id', function(req,res,next){
        order.findByIdAndRemove({_id: req.params.id}).then(function(order){
          res.send(order);
        })
      
       order.remove({_id: req.params.id}, function(err,result){
          if(err){
            res.json(err);
          }
          else{
            res.json(result);
          }
      });
      });

module.exports = router;