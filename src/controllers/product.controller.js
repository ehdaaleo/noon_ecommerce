const Product =require("../models/product.model.js");
// Get 
const getProducts=async(req,res)=>{
    const products= await Product.find();
    res.json(products);
};

const getProduct= async (req,res)=>{
    const product = await Product.findById(req.params.id);
    res.json(product);
};

// create product 
const createProduct= async ( req , res)=>
{
    const product= await Product.create({
        name:req.body.name,
        price: req.body.price,
        description:req.body.description
    });
    res.status(201).json(product);
};

module.exports={
    getProducts,
    getProduct,
    createProduct
}
