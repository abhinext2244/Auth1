const express=require("express")
const connection=require("./config/db")
const ProductRouter=require("./route/product.route")
const server=express()
const jwt=require("jsonwebtoken")
server.use(express.json())
server.use("/product",ProductRouter)
const PORT=3006
server.get("/get-data",(req,res)=>{
     res.send("get data recived")
})

server.listen(PORT,async()=>{
    try {
        await connection
        console.log("server is running ",PORT)
        
    } catch (error) {
        console.log("server is not running",error)
    }
})