const { people } = require('./data');



const getPeople =(req,res)=>{
  res.status(200).json({Success:true,data:people})     //before we post we need to get the data
}

const createPeople =(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,person:name})   

}


const createPeoplePostman =(req,res)=>{
  // res.status(201).send('Sucess')
   const {name} =req.body;
   if(!name){
    return res.status(400)
    .json({success:false,msg:"please provide the name"})
   }
   res.status(201).json({Success:true,data:[...people,name]})   

}

const updatePeople = (req,res)=>{
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
}


const deletePeople =(req,res)=>{
  const {id} =req.params
  const {name}=req.body


  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res.status(404).json({Success:false,msg:`no person with id ${id}`})
  }

  const newpeople = people.filter((person)=> person.id !==Number(id))
    
  
  return res.status(200).json({Success:true,data:newpeople})
}

module.exports ={
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople
}