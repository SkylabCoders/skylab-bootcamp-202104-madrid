const { Router } = require('express');
const HeroController = require('../controllers/HeroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(HeroController.getAll)
    .post(HeroController.postHero);

  heroRoutes
    .route('/:heroId')
    .get(HeroController.getById)
    .put(HeroController.putHero)
    .delete(HeroController.deleteHero);

  return heroRoutes;
}

module.exports = heroRouter();
