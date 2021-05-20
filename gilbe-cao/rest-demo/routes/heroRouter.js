const express = require('express');
const heroesController = require('../controllers/heroesController');

function heroRouter() {
  const heroRoutes = express.Router();

  heroRoutes
    .route('/')
    .get(heroesController.getAllHeroes);

  heroRoutes
    .route('/:heroId')
    .get(heroesController.getOneById)
    .delete(heroesController.deleteById)
    .put(heroesController.updateById);

  return heroRoutes;
}

module.exports = heroRouter;
