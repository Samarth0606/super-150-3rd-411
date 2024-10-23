const express = require('express');
const app = express();

app.use( (req,res,next)=>{
    console.log("mai hu middleware");
    // res.send('<h1> chal gya</h1>')
    next();
} )

app.get('/' , (req,res)=>{
    res.send("i m root route")
})


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})