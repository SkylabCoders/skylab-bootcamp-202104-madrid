const { Router } = require('express');
const HeroController = require('../controllers/HeroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/api/heroes')
    .get(HeroController.getAll)
    .post(HeroController.postHero);

  heroRoutes
    .route('/api/heroes/:heroId')
    .get(HeroController.getById)
    .put(HeroController.putHero)
    .delete(HeroController.deleteHero);

  return heroRoutes;
}

module.exports = heroRouter();
