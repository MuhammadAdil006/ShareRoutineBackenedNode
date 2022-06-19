const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const dbconnectFlag = false;

//error formatter

const errorFormatter = e => {
    let errors = {};
    const allErrors = e.substring(e.indexOf(':') + 1).trim().split(',').map(err => err.trim());
    allErrors.forEach(err => {
        const [key, value] = err.split(':').map(err => err.trim());
        errors[key] = value;
    });

    return errors;
}
//db

const { body, validationResult } = require('express-validator');
const create = (req, res) => {
    // let er = {
    //     firstName: undefined,
    //     lastName: undefined,
    //     password: undefined,
    //     email: undefined,
    //     gender: undefined
    // };
    console.log("creating account");
    const arg = req.body;
    console.log(arg);
    console.log(arg.firstname);
    const user = new User({
        firstName: arg.firstname,
        lastName: arg.lastname,
        email: arg.email,
        password: arg.New_password,
        Day: Number(arg.day),
        Month: Number(arg.month),
        Year: Number(arg.year),
        Gender: arg.gender
    });

    user.save().then(result => {
          let er = {
        firstName: undefined,
        lastName: undefined,
        password: undefined,
        email: undefined,
        gender: undefined
    };
        const mesage=1;
        res.render('Index', { title: "homegreen", er: er,message:message });
    }).catch(err => {
        //check if email exits or not
        //checking if user with that email exists or not
        let flag=true;
        User.findOne({ email: arg.email }).then(user=>{
           
                console.log("user exists--------------------");
                // console.log("error mesage"+err.message);
                // er = errorFormatter(err.message);
                flag=false;
                let er=errorFormatter(err.message);
                er.email="email already exists";
                const message=1;
            console.log(er);
            console.log(er.email);
            console.log(er.password);
            res.render('Index', { title: "homegreen", er: er,message:message });

        }).catch(err=>{
            console.log("user does not exist");
            if(flag){
                console.log("error message"+err.message);
                er = errorFormatter(err.message);
                res.render('Index', { title: "homegreen", er: er });
            }
        });
           
        });


    };


    module.exports = { create };