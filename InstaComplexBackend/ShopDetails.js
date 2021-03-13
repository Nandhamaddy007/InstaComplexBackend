var mongoose=require('mongoose');  
var shopSchema=mongoose.Schema({
	  shopName:String,
      shopOwner:String,
      shopOwnerMobile:String,
      shopOwnerEmail:String,
      shopOwnerAddress:String,
      shopOwnerInstaId:String,
      shopOwnerGpay:String,
      shopOwnerPaytm:String,
      shopLogo:String,      
})

module.exports = mongoose.model('ShopDetails', shopSchema);