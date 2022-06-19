const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const index = (req, res) => {
    console.log("in index");
    const er = {
        firstName: undefined,
        lastName: undefined,
        password: undefined,
        email: undefined,
        Gender: undefined
    };
    console.log(er.firstname);
    const message=0;

    res.render('Index', { title: "home", er: er,message:message });
};
const signIn=(req,res)=>{
    //check if account exits or not
    console.log("in signIn");
    const arg = req.body;
    console.log(arg);
    User.findOne({
        email: arg.email,
        password: arg.New_password
    }, function(err, user) {
        if (user) {
           
            //user exists
            res.render('NewsFeed', { title: "ShareYourRoutine", user:user ,login:1});

        }else{
            const er = {
                firstName: undefined,
                lastName: undefined,
                password: undefined,
                email: undefined,
                Gender: undefined
            };
            //user doesn't exists
            res.render('Index', { title: "home",er:er,message:3 });
        }
        
    });
};

module.exports = { index ,signIn};