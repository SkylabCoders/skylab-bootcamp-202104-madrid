
const { model, Schema } = require('mongoose')

const heroSchema = Schema({
  id: Number,
  name: String
})

module.exports = model('Heroes', heroSchema)
