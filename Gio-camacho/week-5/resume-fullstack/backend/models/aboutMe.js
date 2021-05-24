const { model, Schema } = require('mongoose');

const aboutMeSchema = Schema({
  name: String,
  profession: String,
  title: String,
  description: String
});

module.exports = model('AboutMe', aboutMeSchema);
