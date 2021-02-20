const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema( {
  name : {type:String, required:true},
  address : {type:String, required:true},
  email : {type:String, required:true},
  enteredRaffle : {type:Boolean, required:true},
  major : {type:String, required:true},
  phoneNumber : {type:String, required:true},
  year : {type:String, required:true}
},
{
  timestamps : true
})

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
