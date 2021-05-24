const { model, Schema } = require('mongoose');

const skillsSchema = Schema({
  title: String,
  html: String,
  css: String,
  javascript: String,
  angular: String,
  node: String,
  mongoDB: String
});

module.exports = model('Skills', skillsSchema);
