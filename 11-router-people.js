const express =require('express')

const router= express.Router();



const {
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople


}=require('./13-controllers')

//first type

/*router.get('/',getPeople)
router.post('/',createPeople)
//we will return people by routerle new person
router.post('/postman', createPeoplePostman)
//update the name(given in input) for the id specified in the req params
router.put('/:id',updatePeople)
//delete person with the id;
router.delete('/:id',deletePeople) */

//second type

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPeoplePostman)
router.route('/:id').put(updatePeople).delete(deletePeople)



module.exports =router

