const { model, Schema } = require('mongoose');

const profileSchema = Schema({
  image: String,
  title: String,
  description: String
});

module.exports = model('Profile', profileSchema);
