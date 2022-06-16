const mongoose=require('mongoose');
const schema = mongoose.Schema;
const validator=require('validator');
const UserSchema= new schema({
    firstName:{
        type:String,
        required:[true,"first name is required"]
    },
    lastName:{
        type:String,
        required:[true,"last name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    Day:{
        type:Number,
        required:[true,"day is required"]
    },
    Month:{
        type:Number,
        required:[true,"month is required"]
    },
    Year:{
        type:Number,
        required:[true,"year is required"]
    },
    Gender:{
        type:String,
        required:[true,"gender is required"]
    }
},{timestamps:true});

const User=mongoose.model('User',UserSchema);
module.exports=User;