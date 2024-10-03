const app = require('express')();

app.get('/',(req,res)=>{
  const method =req.method;
  const url =req.url;
  const date =new Date().getFullYear();

  console.log(method,url,date);

  res.send("home page");
  
})