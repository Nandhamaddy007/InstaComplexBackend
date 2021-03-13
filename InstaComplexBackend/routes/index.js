var express = require('express');
var Test01=require('../Test')
var ShopDetails=require('../ShopDetails')
const mongoose = require('mongoose')
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'InstaComplex' });
//});

router.get('/db', function(req, res, next) {	 			
	ShopDetails.find(function(err, data) {
			  	       if(err){
			  	           console.log(err);
			  	       }
			  	       else{
			  	    	   
			  	           res.send(data);
			  	       }
			  	   });  			    	
	
	});

router.post('/addShop', function(req, res) {
	console.log(req.body);
    var newShop = new ShopDetails({
    			    			
    			  shopName:req.body.shopName,
    		      shopOwner:req.body.shopOwner,
    		      shopOwnerMobile:req.body.shopOwnerMobile,
    		      shopOwnerEmail:req.body.shopOwnerEmail,
    		      shopOwnerAddress:req.body.shopOwnerAddress,
    		      shopOwnerInstaId:req.body.shopOwnerInstaId,
    		      shopOwnerGpay:req.body.shopOwnerGpay,
    		      shopOwnerPaytm:req.body.shopOwnerPaytm,
    		      shopLogo:req.body.shopLogo      
    		          			
    			});   	
    newShop.save(function(err, data){
        if(err){
            console.log(err);
        }
        else{
            res.send({'message':'Data inserted'});
        }
    });
    
});

module.exports = router;
