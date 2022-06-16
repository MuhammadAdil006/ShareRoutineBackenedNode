const express=require('express');
const mongoose=require('mongoose');
const User = require('../models/User');
const dbconnectFlag=false;

//db

const {body,validationResult}=require('express-validator');
const create=(req,res)=>{
    body('email').isEmail();
    body('password').isLength({min:6});
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    }
    else{
        console.log("creating account");
        const arg=req.body;
        console.log(arg);
        console.log(arg.firstname);
        const user= new User({
            firstName:arg.firstname,
            lastName:arg.lastname,
            email:arg.email,
            password:arg.New_password,
            Day:Number(arg.day),
            Month:Number(arg.month),
            Year:Number(arg.year),
            Gender:arg.gender
        });
        user.save().then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
   
};


module.exports={create};