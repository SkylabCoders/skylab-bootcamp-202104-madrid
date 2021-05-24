const { model, Schema } = require('mongoose');
// const Info = require('./infoModel');
// const Knowledge = require('./knowledgeModel');

const cvSchema = Schema({
  skills: String,
  info: {
    name: String,
    phoneNumber: Number,
    email: String,
  },
  knowledge: {
    language: String,
    academy: String,
    year: Number,
  },
});

module.exports = model('Cv', cvSchema);
