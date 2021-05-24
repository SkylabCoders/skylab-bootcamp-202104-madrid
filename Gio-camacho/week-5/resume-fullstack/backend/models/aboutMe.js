const { model, Schema } = require('mongoose');

const aboutMeSchema = Schema({
  description: String
});

module.exports = model('AboutMe', aboutMeSchema);
