const { model, Schema } = require('mongoose');

const todoSchema = Schema({
  name: String,
  isCompleted: Boolean,
});

module.exports = model('ToDo', todoSchema);
