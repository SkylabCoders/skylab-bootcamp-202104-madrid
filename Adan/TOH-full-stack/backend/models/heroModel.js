const { model, Schema } = require('mongoose');

const heroSchema = Schema({
  _id: String,
  name: String
}); // schema la forma que va a tener el objeto que se guarda en la base de datos

module.exports = model('Heroes', heroSchema);
