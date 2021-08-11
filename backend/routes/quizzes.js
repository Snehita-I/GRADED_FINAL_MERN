import express from 'express';
import QuizStudentAnswer from '../models/quizStudentAnswerModel.js';
import QuizQuestion from '../models/quizQuestionModel.js';
import Quiz from '../models/quizModel.js';
import User from '../models/userModel.js';
const router = express.Router()
router.route('/').get((req, res) => {
  Quiz.find()
    .then(quizzes => res.json(quizzes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Quiz.findByIdAndDelete(req.params.id)
    .then(() => res.json('Quiz deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => res.json(quiz))
    .catch(err => res.status(400).json('Error: ' + err));
});


// router.route('/hasGivenQuiz/:id/').get((req, res) => {
//   Quiz.findById(req.params.id)
//     .then(quiz => {
//       quiz.studentAnswers.map((ans)=>{
//         if(req.body.userId == ans.studentId){

//         }
//       })
//    })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {
  console.log("Enteres :", req.body);
  
  User.findById(req.body.studentAnswer.studentId)
  .then(user=>{
    console.log("userfound ",user);
    console.log("req.params"+req.params.id);
    Quiz.findById(req.params.id)
    .then(quiz => {
      console.log("enered"+quiz);
      
      let answer = quiz.studentsAnswers;
      console.log("anse: ",answer);
      const newstuans={
        "studentScore":req.body.studentAnswer.studentScore,
        "studentId":user
      }
      console.log("newstuans: "+newstuans);
      answer.push(newstuans);
       console.log("answer"+answer);
       quiz.studentsAnswers = answer;
      quiz.save()
        .then(() => res.json('Quiz updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));


  });
});




export default router;