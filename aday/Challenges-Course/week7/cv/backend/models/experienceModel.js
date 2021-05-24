const { model, Schema } = require('mongoose');

const information = Schema(
  {
    company: String,
    years: Number,
    position: String,
  },
);

module.exports = model('Information', information);
