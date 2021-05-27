const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attachmentSchema = new Schema({
  studId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  file: {
    type:String,
    required:true,
    trim:true
  },
  fileType: {
    type:String,
    trim:true
  },
  plagarismPercent: {
    type:Number
  }

}, {
  timestamps: true,
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;