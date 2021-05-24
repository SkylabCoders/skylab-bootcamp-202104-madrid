const { model, Schema } = require('mongoose');
const Info = require('./infoModel');
const Knowledge = require('./knowledgeModel');

const cvSchema = Schema({
  skills: String
},
{ info: [Info] },
{ knowledge: [Knowledge] });

module.exports = model('Cv', cvSchema);
