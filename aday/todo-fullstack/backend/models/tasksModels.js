const { model, Schema } = require('mongoose');

const tasksSchema = Schema({
  responsable: String,
  description: String,
  isCompleted: Boolean,
});

module.exports = model('Task', tasksSchema);
