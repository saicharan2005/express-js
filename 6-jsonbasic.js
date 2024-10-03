

const express = require('express')

const app =express()



const {products } = require('./data');



app.get('/helo',(req,res)=>{
  res.json([{name:'charan'},{age:18}])
})


app.get('/',(req,res)=>{

  // console.log(products);

  res.status(201).json(products);
})


app.listen(5000,()=>{
  console.log("server is loading ........");
  
})