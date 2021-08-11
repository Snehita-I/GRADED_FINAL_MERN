import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: { type: String, required: true},
    commentId : {type:String, required: true, unique:true},
  user:[
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:false
    }
  ]
  
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;