const { model, Schema } = require('mongoose');
const Information = require('./infoModel');
const Knowledge = require('./knowledgeModel');

const cvSchema = Schema({
  info: Information,
  skills: String,
  knowledge: Knowledge
});
module.exports = model('Cv', cvSchema);
