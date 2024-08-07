const mongoose=require("mongoose")
const ProductSchame=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
      price:{
        type:Number,
        required:true
    }
})
const ProductModel=mongoose.model("product",ProductSchame)
module.exports=ProductModel