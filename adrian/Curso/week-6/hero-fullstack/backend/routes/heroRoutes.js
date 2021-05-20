const { Router } = require('express');
const HeroController = require('../controllers/heroControllers');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(HeroController.getAll)
    .post(HeroController.post);

  heroRoutes
    .route('/:heroId')
    .get(HeroController.getById)
    .put(HeroController.put)
    .delete(HeroController.delete);

  return heroRoutes;
}

module.exports = heroRouter();
