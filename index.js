const express = require('express');
const app = express();
const mong = require("mongoose");

// model import
const contact = require('./models/contact.model');

// connect mongo

mong.connect('mongodb://127.0.0.1:27017/contact-curd') 
.then(() => console.log("MongoDB Connected..."));


// Set To Template Engine
app.set('view engine','ejs');

// middleware 
app.use(express.urlencoded({extended: false})); //this middleware is form data accept
app.use(express.json()); //this middleware is json data accept
app.use(express.static('public')); //this middleware to static folder enable in web to direct access to css js etc file

// View Pages Routing
app.get('/',async(r,res)=>{
    const contacts = await contact.find();
    // res.send(contacts);
    // console.log(contacts);

    res.render('index',{d:contacts});
})
app.get('/contact/:id',async (r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id : id});
    console.log(contacts);
    res.render('show',{d: contacts[0]});
})
app.get('/contact-update/:id',async(r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id: id});
    res.render('update',{d: contacts[0]});
})
app.get('/new-contact',(r,res)=>{
    res.render('form');
})

// Flow Controls Routing
app.post('/contact-update/:id',async(r,res)=>{
    const id = r.params.id;
    // const {first_name,last_name,email,phone,address} = r.body;
    // const upd = await contact.findByIdAndUpdate(id,{first_name,last_name,email,phone,address}) //in case recebed data not same on collection field
    const upd = await contact.findByIdAndUpdate(id,r.body)
    res.redirect('/');
    // res.send('Contact Updated: '+upd);
});
app.post('/new-contact',async(r,res)=>{
    const data = r.body;
    console.log(r.body);
    const cont = await contact.create(data);
    res.send(cont);

    // ins = contact.insertOne(data);
    // res.redirect('/');
});
app.get('/delete/:id',async(r,res)=>{
    const id = r.params.id;
    const del =await contact.findByIdAndDelete(id);
    console.log(del);
    res.redirect('/');
})




app.listen(4000,()=>{
    console.log('Server is running on http://localhost:4000');
})