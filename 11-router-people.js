const express =require('express')

const router= express.Router();

const { people } = require('./data');

router.get('/',(req,res)=>{
  res.status(200).json({Success:true,data:people})     //before we post we need to get the data
})


router.post('/',(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,person:name})   

})

//we will return people by routerle new person

router.post('/postman',(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,data:[...people,name]})   

})



//update the name(given in input) for the id specified in the req params


router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
  const {id} =req.params
  const {name}=req.body


  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res.status(404).json({Success:false,msg:`no person with id ${id}`})
  }

  const newpeople = people.filter((person)=> person.id !==Number(id))
    
  
  return res.status(200).json({Success:true,data:newpeople})
})



module.exports =router

