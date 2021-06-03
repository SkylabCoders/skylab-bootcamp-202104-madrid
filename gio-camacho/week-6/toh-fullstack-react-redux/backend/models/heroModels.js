const { model, Schema, Types } = require('mongoose');

const heroSchema = Schema({
  _id: Types.ObjectId,
  name: String,
});

module.exports = model('Hero', heroSchema);
