const app = require('express')();

// app.get('/',(req,res)=>{
//   const method =req.method;
//   const url =req.url;
//   const date =new Date().getFullYear();

//   console.log(method,url,date);

//   res.send("home page");
  
// })

const logger =(req,res,next)=>{
  const method =req.method;
  const url =req.url;
  const date =new Date().getFullYear();

  console.log(method,url,date);
  next();
}

app.get('/',logger,(req,res)=>{

    res.send("home page");
})

app.get('/about',logger,(req,res)=>{
 
    res.send("about page");
})



app.listen(5000,()=>{
  console.log("server is started ......");
  
})