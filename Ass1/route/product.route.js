const express=require("express")
const ProductModel=require("../Model/product.model")
const ProductRouter=express.Router()
ProductRouter.post("/data-post", async(req,res)=>{
   const {name,title,price}=req.body
    try {
        const product= new ProductModel({
          name,
          title,
          price
        })
       await product.save()
        res.status(201).json({"msg":"database connect"})
    } catch (error) {
        res.status(400).json({"msg":"database not connect",error})
    }
})
module.exports=ProductRouter