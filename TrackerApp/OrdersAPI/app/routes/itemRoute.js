const express = require('express');
const router = express.Router();
const item = require('../../model/item')

// Get a list of items from the DB
router.get('/items', function(req,res,next){
    item.find({}).then(function(items){
        res.send(items);
    });
});


router.post('/items', function(req,res,next){
    item.create(req.body).then(function(item){  //Creates new instance of item object locally then saves it the DB, also returns a promise
       res.send(item);
     }).catch(next);  
 });
 
 //Update a ninja in the DB
router.put('/items/:id', function(req,res,next){
    item.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      item.findOne({_id: req.params.id}).then(function(item){        //re-find ninja in DB
        res.send(item);
      });
      });
    });


    //Delete
    router.delete('/item/:id', function(req,res,next){
        item.findByIdAndRemove({_id: req.params.id}).then(function(item){
          res.send(item);
        })
      
       item.remove({_id: req.params.id}, function(err,result){
          if(err){
            res.json(err);
          }
          else{
            res.json(result);
          }
      });
      });

module.exports = router;