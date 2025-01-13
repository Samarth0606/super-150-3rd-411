
const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini server


// read
router.get('/products' , async (req,res)=>{
    let allProducts = await Product.find({})
    res.render('home' , {allProducts})
})

// new form\
router.get('/product/new' , (req,res)=>{
    
})


module.exports = router;