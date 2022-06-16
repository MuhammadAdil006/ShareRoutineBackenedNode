

const index=(req,res)=>{
    console.log("in index");
    res.render('Index',{title:"home"});
};


module.exports={index};