const { model, Schema } = require('mongoose');

const skillsSchema = Schema({

  html: String,
  css: String,
  javascript: String,
  python: String,
  angular: String,
  nodejs: String,
  mongoDB: String

});

module.exports = model('Skills', skillsSchema);
