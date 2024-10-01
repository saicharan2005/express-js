const express =require('express')
const path =require('path')

const app =express();



// middle ware

app.use(express.static('./public'))


app.get('/',(req,res)=>{
  console.log("user  hits home");
  
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1> 404 error </h1>')
})

app.listen(5000,()=>{
  console.log("server is loading");
  
})