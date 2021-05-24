const { model, Schema } = require('mongoose');

const infoSchema = Schema({
  name: String,
  email: String,
  linkedin: String,
  img: String,
  skills: String,
  description: String

});

module.exports = model('Info', infoSchema);
