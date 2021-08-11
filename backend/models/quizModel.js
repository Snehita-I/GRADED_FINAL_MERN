import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  quizTime: {type:Date, require: true},
  courseId: {type:String, reuired: true},//A001
  quizId: { type: String , require: true, unique: true},
  quizName: {type: String, required: true},
  quizText: { type: String, required: true },
  courseCode: {type: String, required:true},
  quizQuestions:[
      {
        type: Schema.Types.ObjectId,
        ref: 'QuizQuestion'
      }
  ],
  studentsAnswers:[
      {
          studentScore:{type:Number},
          studentId:{
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
      }
  ]
  
}, {
  timestamps: true,
});

const Quiz = mongoose.model('Quiz', QuizSchema);

export default Quiz;