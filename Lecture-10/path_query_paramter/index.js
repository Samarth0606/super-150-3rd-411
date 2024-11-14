const express = require('express');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

// path paramter -> infinite routing -> req.params
// app.get('/r/:something' , (req,res)=>{
//     let {something} = req.params;
//     res.send(something)
// })

// query
app.get('/home' , (req,res)=>{
    res.render('form')
})
app.get('/search' , (req,res)=>{
    let {rest , dish} = req.query;
    res.send({rest , dish})
})

app.listen(8080 , ()=>{
    console.log(`SERVER CONNECTEDAT PORT: 8080`);
})