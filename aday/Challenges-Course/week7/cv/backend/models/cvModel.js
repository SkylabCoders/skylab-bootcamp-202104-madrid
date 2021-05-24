const { model, Schema } = require('mongoose');
const Information = require('./experienceModel');

const cvSchema = Schema({
  dni: Number,
  birthdate: Date,
  name: String,
  surname: String,
  phone: Number,
  linkedin: String,
},
{ experience: [Information] });

module.exports = model('Cv', cvSchema);
