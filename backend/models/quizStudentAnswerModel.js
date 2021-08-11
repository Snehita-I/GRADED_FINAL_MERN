import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuizStudentAnswerSchema = new Schema({
  courseCode: {type: String, required:true},
  quizId: {type: String, required:true},
  answers:[
      {
          questionId:{type:String,required:true},
          answerOptionCode:{type:String,required:true}
      }
  ],
  score: {type:Number, required:true}
  
}, {
  timestamps: true,
});

const QuizStudentAnswer = mongoose.model('QuizStudentAnswer', QuizStudentAnswerSchema);

export default QuizStudentAnswer;