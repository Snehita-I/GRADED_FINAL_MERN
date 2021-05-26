const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
  courseid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  semester:{
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;