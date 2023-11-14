const express = require('express')

const Product = require('../models/productModel')

const {getProducts, addProduct, getProduct, updateProduct, deleteProduct} = require('../Controllers/productController')


const router = express.Router();


//routes...
router.get('/GetAll',getProducts )
router.get('/Get/:id',getProduct )
router.post('/Add', addProduct)
router.put('/Update/:id',updateProduct)
router.delete('/Delete/:id', deleteProduct)


module.exports = router;