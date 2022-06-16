const express=require('express');
const mongoose=require('mongoose');
const User = require('../models/User');
const dbconnectFlag=false;

//error formatter

const errorFormatter=e=>{
    let  errors={};
    const allErrors=e.substring(e.indexOf(':')+1).trim().split(',').map(err=>err.trim());
    allErrors.forEach(err=>{
        const[key,value]=err.split(':').map(err=>err.trim());
        errors[key]=value;
    });

    return errors;
}
//db

const {body,validationResult}=require('express-validator');
const create=(req,res)=>{

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
            const er=errorFormatter(err.message);
            console.log(er);
            res.send(er);

        });
       
   
};


module.exports={create};