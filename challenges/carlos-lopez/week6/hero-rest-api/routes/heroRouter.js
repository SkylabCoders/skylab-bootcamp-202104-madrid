const { Router } = require('express');
const heroController = require('../controllers/heroController');

function heroRouter() {
  const heroRoutes = Router();
  heroRoutes
    .route('/')
    .get(heroController.getAll)
    .post(heroController.post);
  heroRoutes
    .route('/:heroId')
    .get(heroController.getHero)
    .put(heroController.modifyHero)
    .delete(heroController.deleteHero);
  return heroRoutes;
}
module.exports = heroRouter();
