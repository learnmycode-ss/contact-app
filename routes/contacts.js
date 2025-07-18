import express from "express";
const router = express.Router(); 
// const contact = require('./models/contact.model');
import contact from '../models/contact.model.js';

// View Pages Routing
router.get('/',async(r,res)=>{
    const contacts = await contact.find();
    res.render('index',{d:contacts});
})
router.get('/contact/:id',async (r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id : id});
    // console.log(contacts);
    res.render('show',{d: contacts[0]});
})
router.get('/contact-update/:id',async(r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id: id});
    res.render('update',{d: contacts[0]});
})
router.get('/new-contact',(r,res)=>{
    res.render('form');
})

// Flow Controls Routing
router.post('/contact-update/:id',async(r,res)=>{
    const id = r.params.id;
    // const {first_name,last_name,email,phone,address} = r.body;
    // const upd = await contact.findByIdAndUpdate(id,{first_name,last_name,email,phone,address}) //in case recebed data not same on collection field
    const upd = await contact.findByIdAndUpdate(id,r.body)
    res.redirect('/');
    // res.send('Contact Updated: '+upd);
});
router.post('/new-contact',async(r,res)=>{
    const data = r.body;
    // console.log(r.body);
    const cont = await contact.create(data);
    res.send(cont);

    // ins = contact.insertOne(data);
    // res.redirect('/');
});
router.get('/delete/:id',async(r,res)=>{
    const id = r.params.id;
    const del =await contact.findByIdAndDelete(id);
    // console.log(del);
    res.redirect('/');
})


export default router; 