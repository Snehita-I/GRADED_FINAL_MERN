import express from 'express';
import QuizStudentAnswer from '../models/quizStudentAnswerModel.js';
import QuizQuestion from '../models/quizQuestionModel.js';
const router = express.Router()
router.route('/').get((req, res) => {
  QuizQuestion.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  QuizQuestion.findByIdAndDelete(req.params.id)
    .then(() => res.json('Question deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  QuizQuestion.findById(req.params.id)
    .then(quiz => res.json(quiz))
    .catch(err => res.status(400).json('Error: ' + err));
});




export default router;