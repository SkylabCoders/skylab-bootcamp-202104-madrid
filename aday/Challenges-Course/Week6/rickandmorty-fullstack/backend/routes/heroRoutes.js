const express = require('express');
const heroesController = require('../controllers/heroesControllers');

function heroRouter() {
  const heroRoutes = express.Router();

  heroRoutes
    .route('/')
    .get(heroesController.getAllHeroes)
    .post(heroesController.createHeroes);

  heroRoutes
    .route('/:heroId')
    .get(heroesController.getById)
    .put(heroesController.updateById)
    .delete(heroesController.deleteHeroes);

  return heroRoutes;
}

module.exports = heroRouter();
