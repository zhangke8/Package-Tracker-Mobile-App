var mongoose = require('mongoose');
var Order = require('./models/order.model')
mongoose.connect('mongodb://127.0.0.1:27017/ordertracking', function (err){
    if (err) throw err;
    console.log('Successfully connected');

    var orderOne = new Order({
        orderId: "abcd",
        orderName: "Leaf Rake",
        price : 19.5,
        imageUrl : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    });
    orderOne.save(function(err){ 
        if (err) throw err;
        console.log('Author successfully saved.');
    })
});