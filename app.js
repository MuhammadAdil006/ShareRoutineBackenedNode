
const express=require('express');
const app=express();
const index=require('./routes/index.js');
const mongoose=require('mongoose');
const corps=require('cors');


app.set('view engine','ejs');
app.use(corps());
//db
const db='mongodb+srv://Adil:231388@shareyourroutine.sp3tni6.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    console.log("connected db");
}).catch(err=>{
    console.log("there is error in db connection");
});
app.use(express.urlencoded(true));
app.use(express.static('public'));


app.use('/',index);


// app.get('/',(req,res)=>{
//     res.render('Index',{title: 'SignIn'});
// });


app.listen(3000,()=>{
    console.log('server is running on port 3000');
});