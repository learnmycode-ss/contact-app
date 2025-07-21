import express from "express";
const router = express.Router(); 
// const contact = require('./models/contact.model');
import contact from '../models/contact.model.js';
import {getContact,showContact,getUpdateContact,getNewContact,updateContact,NewContact,deleteContact,e404} from '../controller/contact.ctl.js';

// View Pages Routing
router.get('/',getContact)
router.get('/contact/:id',showContact )
router.get('/contact-update/:id',getUpdateContact)
router.get('/new-contact',getNewContact)

// Flow Controls Routing
router.post('/contact-update/:id',updateContact);
router.post('/new-contact',NewContact);
router.get('/delete/:id',deleteContact);
// router.all('*',e404);

export default router; 