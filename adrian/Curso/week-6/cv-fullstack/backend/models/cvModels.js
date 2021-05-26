const { model, Schema } = require('mongoose');

const userSchema = Schema({
  skills: Array,
  experience: Array,
  education: Array,
  userInfo: {
    name: String,
    mail: String,
    phone: Number
  }
});

module.exports = model('User', userSchema);
