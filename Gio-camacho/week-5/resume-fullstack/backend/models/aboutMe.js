const { model, Schema } = require('mongoose');

const aboutMeSchema = Schema({
  title: String,
  profession: String,
  description: String
});

module.exports = model('AboutMe', aboutMeSchema);
