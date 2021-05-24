const { model, Schema } = require('mongoose');

const cvSchema = Schema({
  info: {
    name: String,
    phoneNumber: Number,
    email: String,
  },
  skills: String,
  knowledge: [{
    language: String,
    academy: String,
    year: Number,
  },
  ],
});

module.exports = model('Cv', cvSchema);
