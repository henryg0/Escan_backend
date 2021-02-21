const router = require('express').Router();
let Student = require('../models/Students.models')

router.route('/').get((req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('err: ' + err))
})

router.route('/create').post((req, res) => {
  query = {
    name : req.body.name,
    address : req.body.address,
    email : req.body.email,
    major : req.body.major,
    year : req.body.year
  }

  newStudent = new Student(query);

  newStudent.save()
    .then( () => res.status(200).send("student added!"))
    .catch( (e) => res.status(400).json('error: ' + e));
  
})

module.exports = router;