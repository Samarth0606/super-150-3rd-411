const express = require('express');
const path = require('path');
const app = express();
const productRoute = require('./routes/product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/khidki')
.then(function(){
    console.log("DB CONNECTED");
})
.catch(function(err){
    console.log(err , "DB NOT CONNECTED");
})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))


app.use(productRoute);

app.listen(8080 , ()=>{
    console.log(`server connected at 8080`);
})