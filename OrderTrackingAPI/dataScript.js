const mongoose = require('mongoose');

const Item = require('./model/item');

const Items = [
    Item({
        name:"computer", 
        price:900.00, 
        imageUrl:"https://pisces.bbystatic.com/image2/BestBuy_US/store/ee/2015/com/pm/nav_desktops_1115.jpg",
        added : 0	
    }),
    Item({
        name:"tablet", 
        price:300.00, 
        imageUrl:"https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2018/01/31/goods-img/1517356503798430531.jpg",
        added : 0
    }), 
    Item({
        name:"Ramen", 
        price:20.00,  
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51PXoeVnMWL.jpg",
        added : 0
    }),
    Item({
        name:"Shampoo", 
        price:10.00, 
        imageUrl:"https://www.dollartree.com/assets/product_images_2016/styles/xlarge/433474.jpg",
        added : 0
    }),
    Item({
        name:"Car", 
        price:40000.00, 
        imageUrl:"https://www.paylesscar.com/content/dam/cars/payless/recent-rentals/Compact.png",
        added : 0
    })
]

mongoose.connect("mongodb://localhost:27017/PackageTracking", function (err, response) {
	if (err) { console.log(err); }
	else { console.log('Connected to ' + response); }
	
	for (i = 0; i < Items.length; i++) {

		Items[i].save((err)=>{
			if (err) throw err;
			console.log("inserted record");
		})
	}
});