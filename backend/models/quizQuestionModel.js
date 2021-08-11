import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuizQuestionSchema = new Schema({
  courseCode: {type: String, required:true},
  questionId: { type: String , require: true},
  questionText: { type: String, required: true },
  quizId: {type: String, required:true},
  answerOptions:[
      {
          option_name:{type:String,required:true},
          option_code:{type:String,required:true}
      }
  ],
  rightAnswer: {type:String, required:true}
  
}, {
  timestamps: true,
});

const QuizQuestion = mongoose.model('QuizQuestion', QuizQuestionSchema);

export default QuizQuestion;