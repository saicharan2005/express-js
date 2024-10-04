const app = require('express')();


const logger =require('./logger.js')

const authorize =require('./authorize.js')


const morgan =require('morgan')
// app.get('/',(req,res)=>{
//   const method =req.method;
//   const url =req.url;
//   const date =new Date().getFullYear();

//   console.log(method,url,date);

//   res.send("home page");
  
// })

// app.use(logger);

app.use('/',[logger,authorize]);




app.get('/',(req,res)=>{
  console.log(req.user);
    res.send("home page");
})

app.get('/about',(req,res)=>{
 
    res.send("about page");
})


app.get('/api/products',(req,res)=>{
  res.send('products')
})

app.get('/api/items',(req,res)=>{
  res.send('items')
})


app.listen(5001,()=>{
  console.log("server is started......");
  
})