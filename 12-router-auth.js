const express = require('express')  

 const router =express.Router()

 router.post('/',(req,res)=>{
  // console.log(req.body);
  const {name}=req.body
  if(name){
    return res.status(201).send( `hey welcome ${name}`)
  }
  
  
   res.status(401).send(`please enter credintials `)
}) 

module.exports=router;