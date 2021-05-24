const { model, Schema } = require('mongoose');

const taskSchema = Schema({
  description: String,
  isCompleted: Boolean
});

module.exports = model('Task', taskSchema);
