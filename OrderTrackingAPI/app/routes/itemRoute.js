const express = require('express');
const router = express.Router();
const Item = require('../../model/item')

router.route('/items')

    .get(function(req, res){
        Item.find({}, function(err, data){
            if (err) {
                res.send(err);
            }
            else {
                res.send(data);
            }
        });
    });


module.exports = router;