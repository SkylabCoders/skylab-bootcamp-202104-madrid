const { model, Schema } = require('mongoose');

const taskSchema = Schema(
  {
    description: String,
    check: Boolean,
  },
);

module.exports = model('Task', taskSchema);
