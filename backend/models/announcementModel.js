import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    announcementCode: { type: String, required: true, unique:true},
  announcementText: { type: String, required: true },
  courseCode: {type: String, required:true},
  smile_count: {type: Number, required:true},
  think_count: {type: Number, required:true},
  heart_count: {type: Number, required:true},
  thumbsUp_count: {type: Number, required:true},
  thumbsDown_count: {type: Number, required:true},
  clap_count: {type: Number, required:true},
  users:[
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:false
    }
  ],
  commentsPosted:[
    {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    required:false
    }
  ],
  reactions:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
      required:false
    }
  ]
  
}, {
  timestamps: true,
});

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;