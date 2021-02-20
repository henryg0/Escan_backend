const router = require('express').Router();
let Student = require('../models/Students.models')

router.route('/').get((req, res) => {
  res.status(200).send("hello world");
  /*
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).send(err))
  */
})

router.route('/create').post((req, res) => {
  query = {
    name : req.body.name,
    address : req.body.address,
    email : req.body.email,
    enteredRaffle : req.body.enteredRaffle,
    major : req.body.major,
    phoneNumber : req.body.phoneNumber,
    year : req.body.year
  }

  newStudent = new Student(query);

  newStudent.save()
    .then( () => res.status(200).send("student added!"))
    .catch( (e) => res.status(400).json(e));
  
})

module.exports = router;