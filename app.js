const express = require('express');

const app=express()

const people =require('./11-router-people.js')
const auth =require('./12-router-auth.js')



app.use(express.urlencoded({extended:false})) //inorder to access the name (it parse ncoming request)

app.use(express.json()) // this is for the javascript handling request
app.use(express.static('./methods-public'))  //with this iam getting page but type somethig it goes to cannot/login(404) we need to handle it now .... 


//by adding bellow post route is it will now me statys 200


// //first post request
// app.post('/login',(req,res)=>{
//   // console.log(req.body);
  
//   res.send('post method...')
// }) 






app.use('/api/people',people)  // this should alwayss add  after the all other use....

app.use('/login',auth)










app.listen(5000,()=>{
  console.log("server is loading .................");
  
})


