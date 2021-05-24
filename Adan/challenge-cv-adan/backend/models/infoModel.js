const { model, Schema } = require('mongoose');

const infoSchema = Schema({
  name: String,
  phoneNumber: Number,
  email: String
});
module.exports = model('Info', infoSchema);
