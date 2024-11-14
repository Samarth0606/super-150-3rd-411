const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override')

 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



let dummyBlogs = [
    {
        id:0,
        author:"sam",
        comment:"padhai krlo varna struggle kroge"
    },
    {
        id:1,
        author:"monu",
        comment:"daant bharka denge"
    },
    {
        id:2,
        author:"ajju",
        comment:"sariya nikaal ke daal dunga"
    },
    {
        id:3,
        author:"praveen",
        comment:"placement se block krdunga"
    }
]

// read all the blogs
app.get('/blogs' , (req,res)=>{
    res.render('index' , {dummyBlogs})
})

// show a form to add blog
app.get('/blog/new' , (req,res)=>{
    res.render('new')
})

// actually adding blog in db
app.post('/blogs' , (req,res)=>{
    let {author , comment} = req.body;
    // dummyBlogs.push({author:author , comment:comment , id:dummyBlogs.length })
    dummyBlogs.push({author , comment , id:dummyBlogs.length })
    res.redirect('/blogs')
})

// show a paticular blog
app.get('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    // dummyBlogs.find((item)=>item.id === parseInt(idd) )
    let returnedItem = dummyBlogs.find((item)=>item.id == idd )
    res.render('show' , {returnedItem})
})

//form to edit blog

app.get('/blogs/:id/edit' , (req,res)=>{
    let {id} = req.params;
    let returnedItem = dummyBlogs.find((item)=>item.id == id )
    res.render('edit' , {returnedItem})
})

// ACTUALLY EDITING IN DB
app.patch('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    let {author , comment} = req.body;
    let returnedItem = dummyBlogs.find((item)=>item.id == id )
    console.log(returnedItem , "ret");
    returnedItem.author = author;
    returnedItem.comment = comment;
    res.redirect('/blogs')
})

app.delete('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    let newDummy = dummyBlogs.filter((item)=> item.id != idd);
    dummyBlogs = newDummy;
    res.redirect('/blogs')
})

app.listen(8080 , ()=>{
    console.log('Server connected at port 8080');
})