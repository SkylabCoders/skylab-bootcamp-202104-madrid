const { model, Schema } = require('mongoose');

const heroSchema = Schema({
  _id: String,
  name: String,
});

module.exports = model('Heroes', heroSchema);
