const mongoose=require('mongoose');
const schema = mongoose.Schema;
const validator=require('validator');
const UserSchema= new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    Day:{
        type:Number,
        required:true
    },
    Month:{
        type:Number,
        required:true
    },
    Year:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    }
},{timestamps:true});

const User=mongoose.model('User',UserSchema);
module.exports=User;