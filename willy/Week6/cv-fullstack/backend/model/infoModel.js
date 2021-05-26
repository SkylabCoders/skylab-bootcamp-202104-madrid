const { model, Schema } = require('mongoose');

const personalInfoSchema = Schema({
  name: String,
  surname: String,
  phone: Number,
  address: String,
  email: String,
  linkedin: String,
  img: String

});

module.exports = model('Info', personalInfoSchema);
