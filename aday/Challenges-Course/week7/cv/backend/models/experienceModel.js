const { model, Schema } = require('mongoose');

const informationSchema = Schema(
  {
    company: String,
    years: Number,
    position: String,
  },
);

module.exports = model('Information', informationSchema);
