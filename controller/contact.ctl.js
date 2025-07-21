
// model import
import mong from "mongoose";
import contact from '../models/contact.model.js';

export const getContact = async(r,res)=>{
    try{
        const contacts = await contact.find();
        res.render('index',{d:contacts});
    }catch(e){
        console.log(e);
        res.render('500',{message: e});
    }
}
export const showContact = async (r,res)=>{
    try{
        var parentId = mong.Types.ObjectId.isValid(r.params.id);
        if(!parentId){
            res.status(400).render('404',{message : ""});
        }
        const id = r.params.id;
        const contacts = await contact.find({_id : id});
        // console.log(contacts);
        res.render('show',{d: contacts[0]});
    }catch(e){
            res.render('500',{message: e});
    }
}
export const getUpdateContact = async(r,res)=>{
    try{
        if(!mong.Types.ObjectId.isValid(r.params.id)){
            return res.status(400).render('400',{message: 'Invalid Id'});
        }else{
            const id = r.params.id;
            const contacts = await contact.find({_id: id});
            res.render('update',{d: contacts[0]});
        }
    }catch(e){
        res.render('500',{message: e});
    }
}
export const getNewContact = (r,res)=>{
    try{
        res.render('form');
    }catch(e){
        res.render('500',{message: e});
    }
}
export const updateContact = async(r,res)=>{
    try{
        if(!mong.Types.ObjectId.isValid(r.params.id)){
            return res.status(400).render('400',{message: 'Invalid Id'});
        }
        const id = r.params.id;
        // const {first_name,last_name,email,phone,address} = r.body;
        // const upd = await contact.findByIdAndUpdate(id,{first_name,last_name,email,phone,address}) //in case recebed data not same on collection field
        const upd = await contact.findByIdAndUpdate(id,r.body)
        res.redirect('/');
        // res.send('Contact Updated: '+upd);
    }catch(e){
        res.render('500',{message: e});
    }
}
export const NewContact = async(r,res)=>{
    try{
        const data = r.body;
        // console.log(r.body);
        const cont = await contact.create(data);
        // res.send(cont);

        // ins = contact.insertOne(data);
        res.redirect('/');
    }catch(e){
        res.render('500',{message: e});
    }    
}

export const deleteContact = async(r,res)=>{
    try{
        if(!mong.Types.ObjectId.isValid(r.params.id)){
            return res.status(400).render('400',{message: 'Invalid Id'});
        }
        const id = r.params.id;
        const del =await contact.findByIdAndDelete(id);
        // console.log(del);
        res.redirect('/');
    }catch{
        res.render('500',{message: e});
    }
}
export const e404 = (r,res)=>{
    // res.render('404',{message : ""});
   res.send('404 not found');
}

