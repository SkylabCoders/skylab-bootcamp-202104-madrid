const { model, Schema } = require('mongoose');

const experienceSchema = Schema({
  company: String,
  date: String,
  position: String

});

module.exports = model('Experience', experienceSchema);
