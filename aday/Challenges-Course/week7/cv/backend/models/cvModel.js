const { model, Schema } = require('mongoose');
const Information = require('./experienceModel');

const cvSchema = Schema({
  dni: Number,
  name: String,
  surname: String,
  phone: Number,
  linkedin: String,
  experience: [{
    type: Object,
    ref: [Information],
  }],
});

module.exports = model('Cv', cvSchema);
