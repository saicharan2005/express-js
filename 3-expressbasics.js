const express =require('express');
const app = express();

// const app = require('express')();

app.get('/',(req,res)=>{
  console.log("user hits the home")
  res.status(200).send('<h1> hello world </h1>');
})


app.all('*',(req,res)=>{
  res.send('<h1> 404 error</h1>')
})


app.listen(5000,()=>{
  console.log('server is listening')
})