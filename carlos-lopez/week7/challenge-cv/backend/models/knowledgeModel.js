const { model, Schema } = require('mongoose');

const knowledgeSchema = Schema({
  language: String,
  academy: String,
  year: Number,
});

module.exports = model('Knowledge', knowledgeSchema);
