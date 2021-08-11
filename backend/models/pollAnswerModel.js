import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pollAnswerSchema = new Schema({
  announcementCode: { 
            type: String, 
            required: true, 
            unique:true
        },
  pollOption: { type: String, required: true },
}, {
  timestamps: true,
});

const pollAnswer = mongoose.model('Announcement', pollAnswerSchema);

export default pollAnswer;