const {model, Schema } = require('mongoose')

const heroSchema = Schema({
   
    name: String
})

module.exports = model('Heroes', heroSchema)