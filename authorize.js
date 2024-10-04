 const authorize = (req,res,next)=>{
    const {user}=req.query;


    if(user == 'john'){
        console.log(user)
        req.user ={name:'john',id:3};
        next();
    }
    else{
        res. status(404).send("Unauthorized");
    }


};

module.exports = authorize