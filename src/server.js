const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// express use 
dotenv.config();
const app = express();
app.use(express.json());
//Routes  URL 
const productRoutes= require("./routes/product.route.js");

app.use("/products",productRoutes);

// GET , PUT , POST , DELETE 
// TEST URL Genral  
app.get("/",(req, res)=>{
    res.json({
        message :"API its ok"
    });
});
// Route don't exit 
app.use ((req, res , next )=>{
const error = new Error(`Route ${req.originalUrl} not found`);
error.status = 404;
next(error);
});
//  error handling 
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message });
});
const PORT= process.env.PORT||3000;
mongoose .connect( process.env.MONGO_URL).then(()=> 
{
console.log("Monog connected");
app.listen (PORT,()=>{
    console.log(`server is connected on this ${PORT}`)
});
}).catch ((error )=>
{
    console.log ("database not connected");
    console.error(error);
    process.exitCode = 1;

});
