const { Router } = require('express');
const ramController = require('../controllers/ramController');

function ramRouter() {
  const ramRoutes = Router();
  ramRoutes
    .route('/')
    .get(ramController.getAll)
    .post(ramController.createHero);
  ramRoutes
    .route('/:heroId')
    .get(ramController.getHero)
    .put(ramController.modifyHero)
    .delete(ramController.deleteHero);
  return ramRoutes;
}
module.exports = ramRouter();
