const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  description: { type: String, required: true },
  title: {type:String, required: true},
  courseId: {type: String, required:true},
  dueDate: { type: Date, required: true },
  allowLate: { type: Boolean ,required: true},
  penality: {type: Number, require: true},
  lateDueDate: {type: Date, required:true},
  allowedPlagrismPercent: {type: Number},
  keywordsUri: {type:String},
  allowedFileType: [{type:String}], 
  attachments:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Attachment'
    }
  ],
  users:[
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  timestamps: true,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;