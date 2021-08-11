import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pollSchema = new Schema({
  pollId: { type: String , require: true, unique: true},
  pollText: { type: String, required: true },
  courseCode: {type: String, required:true},
  pollOptions:[
      {
          option_name:{type:String,required:true},
          option_code:{type:String,required:true}
      }
  ]
  
}, {
  timestamps: true,
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;