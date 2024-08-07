const jwt=require("jsonwebtoken")
const Auth=(req,res,next)=>{
const token=req.header.authrozation.split(" ")[1]
console.log(token)
}