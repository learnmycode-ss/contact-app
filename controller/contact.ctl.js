
// model import

import contact from '../models/contact.model.js';

export const getContact = async(r,res)=>{
    const contacts = await contact.find();
    res.render('index',{d:contacts});
}
export const showContact = async (r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id : id});
    // console.log(contacts);
    res.render('show',{d: contacts[0]});
}
export const getUpdateContact = async(r,res)=>{
    const id = r.params.id;
    const contacts = await contact.find({_id: id});
    res.render('update',{d: contacts[0]});
}
export const getNewContact = (r,res)=>{
    res.render('form');
}
export const updateContact = async(r,res)=>{
    const id = r.params.id;
    // const {first_name,last_name,email,phone,address} = r.body;
    // const upd = await contact.findByIdAndUpdate(id,{first_name,last_name,email,phone,address}) //in case recebed data not same on collection field
    const upd = await contact.findByIdAndUpdate(id,r.body)
    res.redirect('/');
    // res.send('Contact Updated: '+upd);
}
export const NewContact = async(r,res)=>{
    const data = r.body;
    // console.log(r.body);
    const cont = await contact.create(data);
    // res.send(cont);

    // ins = contact.insertOne(data);
    res.redirect('/');
}

export const deleteContact = async(r,res)=>{
    const id = r.params.id;
    const del =await contact.findByIdAndDelete(id);
    // console.log(del);
    res.redirect('/');
}

