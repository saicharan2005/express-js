//get

// const express =require('express');
// const app=express()

// const {people}=require('./data.js')


// app.get('/people',(req,res)=>{
//   res.status(200).json({sucess:true,data:people});
// })

// app.listen(5001,()=>{
//   console.log("server is loading ......");
// })


const express =require('express');
const { people } = require('./data');
const app=express()

app.use(express.urlencoded({extended:false})) //inorder to access the name (it parse ncoming request)

app.use(express.json()) // this is for the javascript handling request
app.use(express.static('./methods-public'))  //with this iam getting page but type somethig it goes to cannot/login(404) we need to handle it now .... 


//by adding bellow post route is it will now me statys 200


// //first post request
// app.post('/login',(req,res)=>{
//   // console.log(req.body);
  
//   res.send('post method...')
// }) 


app.post('/login',(req,res)=>{
  // console.log(req.body);
  const {name}=req.body
  if(name){
    return res.status(201).send( `hey welcome ${name}`)
  }
  
  
   res.status(401).send(`please enter credintials `)
})  

app.get('/api/people',(req,res)=>{
  res.status(200).json({Success:true,data:people})     //before we post we need to get the data
})
app.post('/api/people',(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,person:name})   

})

//we will return people by apple new person

app.post('/api/people/postman',(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,data:[...people,name]})   

})



//update the name(given in input) for the id specified in the req params


app.put('/api/people/:id',(req,res)=>{
  const {id} =req.params
  const {name}=req.body


  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res.status(404).json({Success:false,msg:`no person with id ${id}`})
  }

  const newpeople = people.map((person)=>{
    if(person.id === Number(id)){
      person.name=name;
    }
    return person
  })
  return res.status(200).json({Success:true,data:newpeople})
})


//delete person with the id;

app.delete('/api/people/:id',(req,res)=>{
  const {id} =req.params
  const {name}=req.body


  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res.status(404).json({Success:false,msg:`no person with id ${id}`})
  }

  const newpeople = people.filter((person)=> person.id !==Number(id))
    
  
  return res.status(200).json({Success:true,data:newpeople})
})













app.listen(5000,()=>{
  console.log("server is loading .................");
  
})


