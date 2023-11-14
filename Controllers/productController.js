/*in this controller method we basically create the logic of each endpoint method and then it will be 
called in the router basically */

const Product = require('../models/productModel');

const asyncHandler = require('express-async-handler');

//method to get products
const getProducts = asyncHandler(async(req,res)=>{

    try{
        const products = await Product.find({});
        res.status(200).json(products);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

//method to get a product
const getProduct = asyncHandler(async(req,res)=>{

    try{
        //get the id from request parameters
        const {id} = req.params;
        const product = await Product.findById(id);

        //const product = await Product.findbyId(id);
        res.status(200).json(product);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})


//method to create product
const addProduct = asyncHandler(async(req,res) => {

    try{

        const product = await  Product.create(req.body);
        res.status(200).json(product)

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);

    }
    // console.log(req.body)
    // res.send(req.body)
})

//method to update product
const updateProduct =  asyncHandler(async(req,res) => {

    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
       
        //if we can't find product with that id...
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with id ${id}`);
        }

        //return updated product
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
    // console.log(req.body)
    // res.send(req.body)
}
)


//method to delete a product
const deleteProduct = asyncHandler (async(req,res) => {

    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
       
        //if we can't find product with that id...
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with id ${id}`);
        }
        res.status(200).json(product)

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);

    }
    // console.log(req.body)
    // res.send(req.body)
})



//specify the methods to be exported..
module.exports = {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}