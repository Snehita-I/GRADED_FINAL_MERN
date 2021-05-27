const router = require('express').Router();
let Class = require('../models/classModel');
let User = require('../models/userModel');
let Assignment = require('../models/assignmentModel');
router.route('/').get((req, res) => {
  Class.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const courseid = req.body.courseid;
  const name = req.body.name;
  const semester = req.body.semester;
  const instructorsEmailid =req.body.instructorsEmailid;
  const studentsEmailid = req.body.studentsEmailid;
  const assignments = [];

  console.log(instructorsEmailid);
  console.log(studentsEmailid);

  const instructors =[];
  const students =[];

  User.find()
   .then(users=>users.forEach((user)=>{
     if(instructorsEmailid.includes(user.emailid)){
      instructors.push(user);
      console.log("instr: ", user.emailid);
     }
     if(studentsEmailid.includes(user.emailid)){
      students.push(user);
      console.log("students: ", user.emailid);
     }
   })).then(()=>{
    const newClass = new Class({courseid, name , semester ,instructors, students,assignments});

    newClass.save()
      .then(() => res.json('Class added!'))
      .catch(err => res.status(400).json('Error: ' + err));
   });

});


router.route('/:id/addAssignment').post((req, res) => {
  const courseId = req.params.id;
  const description = req.body.description;
  const title = req.body.title;
  const dueDate = new Date(req.body.dueDate);
  const penality = req.body.penality;
  const lateDueDate = new Date(req.body.lateDueDate);
  const allowLate = req.body.allowLate;
  const attachments = [];

  const newAssignment = new Assignment({
    courseId,
    description,
    title,
    dueDate,
    lateDueDate,
    penality,
    allowLate,
    attachments
  });

  newAssignment.save()
      .then(() => 
      {
        Class.findById(req.params.id, function (err, assignmentclass) {
          if (err){
              console.log(err);
          }
          else{
              assignmentclass.assignments.push(newAssignment);
          }
      });
        res.json('Assignment added!');
      })
      .catch(err => res.status(400).json('Error: ' + err));


});

router.route('/:id').delete((req, res) => {
  Class.findByIdAndDelete(req.params.id)
    .then(() => res.json('Class deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Class.findById(req.params.id)
    .then(selectedClass => res.json(selectedClass))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;