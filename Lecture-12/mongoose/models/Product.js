const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    image:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    }
})

const Product = mongoose.model('Product' , productSchema);


module.exports = Product;
