const { Router } = require('express');
const HeroController = require('../controllers/HeroController');
const RickController = require('../controllers/RickController');

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

  heroRoutes
    .route('/ricks/characters')
    .get(RickController.getAllRicks)
    .post(RickController.postHero);

  heroRoutes
    .route('/ricks/characters/:heroId')
    .get(RickController.getById)
    .put(RickController.putHero)
    .delete(RickController.deleteHero);

  return heroRoutes;
}

module.exports = heroRouter();
