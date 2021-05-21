const { Router } = require('express');
const heroController = require('../controllers/heroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(heroController.getAll)
    .post(heroController.create);

  heroRoutes
    .route('/:heroId')
    .get(heroController.getById)
    .put(heroController.updateById)
    .delete(heroController.deleteById);

  return heroRoutes;
}

module.exports = heroRouter;
