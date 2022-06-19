const express = require('express');
const route=express.Router();
const signIn=require('../controllers/signIn');
const signUp=require('../controllers/signUp');


route.get('/',signIn.index);
route.post('/SignUp',signUp.create);



module.exports=route;