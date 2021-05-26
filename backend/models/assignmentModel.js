const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  assignmentid: { type: String, required: true , unique:true},
  description: { type: String, required: true },
  title: {type:String, required: true},
  courseid: {type: String, required:true},
  duedate: { type: Date, required: true },
  allowLate: { type: Boolean ,required: true},
  penality: {type: Number, require: true},
  lateDueDate: {type: Date, required:true}
}, {
  timestamps: true,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;