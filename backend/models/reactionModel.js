import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    emoji: { type: String, required: true},
    reactionId : {type:String, required: true, unique:true},
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

const Reaction = mongoose.model('Reaction', reactionSchema);

export default Reaction;