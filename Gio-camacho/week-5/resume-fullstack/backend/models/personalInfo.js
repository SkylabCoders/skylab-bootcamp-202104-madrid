const { model, Schema } = require('mongoose');

const personalInfoSchema = Schema({
  name: String,
  surname: String,
  phone: String,
  address: String,
  email: String,
  linkedIn: String,
  img: String
});

module.exports = model('PersonalInfo', personalInfoSchema);
