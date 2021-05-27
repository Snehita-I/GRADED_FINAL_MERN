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
    type: Number,
    required: true,
    trim: true,
  },
  instructors: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Assignment'
    }
  ]
}, {
  timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;