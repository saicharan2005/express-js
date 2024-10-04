const app=require('express')()

const {people}=require('./data.js')


app.get('/people',(req,res)=>{
  res.status(200).json({sucess:true,data:people});
})

app.listen(5001,()=>{
  console.log("server is loading ......");
})
