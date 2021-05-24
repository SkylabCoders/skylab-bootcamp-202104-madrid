const { model, Schema } = require('mongoose');
const Info = require('./infoModel');
const Knowledge = require('./knowledgeModel');

const cvSchema = Schema({
  info: Info,
  skills: String,
  knowledge: Knowledge,
});

module.exports = model('Cv', cvSchema);
