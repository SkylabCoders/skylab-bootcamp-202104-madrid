const { model, Schema } = require('mongoose');

const contactMeSchema = Schema({
  title: String,
  address: String,
  phone: String,
  mobile: String,
  email: String
});

module.exports = model('ContactMe', contactMeSchema);
