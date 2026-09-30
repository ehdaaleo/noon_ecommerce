/*
const products=[
    {
        id:1,
        name:laptop
        price:234,
        descreption:"dfgfhjkl"
    }
]
    */
   const mongoose= require("mongoose");
    const productSchema= new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number ,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    });
    module.exports= mongoose.model("Product",productSchema);
