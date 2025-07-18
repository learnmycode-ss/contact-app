// const express = require('express');
import express from "express";
const app = express();

// model import
import ContactRoute from './routes/contacts.js';
// connect mongo
import  connectDb  from './config/database.js';

connectDb();

// Set To Template Engine
app.set('view engine','ejs');

// middleware 
app.use(express.urlencoded({extended: false})); //this middleware is form data accept
app.use(express.json()); //this middleware is json data accept
app.use(express.static('public')); //this middleware to static folder enable in web to direct access to css js etc file

app.use("/",ContactRoute);

app.listen(4000,()=>{
    console.log('Server is running on http://localhost:4000');
})
