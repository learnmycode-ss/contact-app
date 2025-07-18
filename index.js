// const express = require('express');
import express from "express";
import ContactRoute from './routes/contacts.js';

const app = express();

// connect mongo
import  connectDb  from './config/database.js';
const PORT = process.env.PORT || 5000;

connectDb();

// Set To Template Engine
app.set('view engine','ejs');

// middleware 
app.use(express.urlencoded({extended: false})); //this middleware is form data accept
app.use(express.json()); //this middleware is json data accept
app.use(express.static('public')); //this middleware to static folder enable in web to direct access to css js etc file

app.use("/",ContactRoute);

app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:'+PORT);
})
