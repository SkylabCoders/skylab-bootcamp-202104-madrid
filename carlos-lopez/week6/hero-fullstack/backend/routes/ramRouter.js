const { Router } = require('express');
const ramController = require('../controllers/ramController');

function ramRouter() {
  const ramRoutes = Router();
  ramRoutes
    .route('/')
    .get(ramController.getAllCharacters)
    .post(ramController.createCharacter);
  ramRoutes
    .route('/:characterId')
    .get(ramController.getCharacter)
    .put(ramController.modifyCharacter)
    .delete(ramController.deleteCharacter);
  return ramRoutes;
}
module.exports = ramRouter();
