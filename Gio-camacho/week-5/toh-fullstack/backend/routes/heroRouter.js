const { Router } = require('express');
const {
  allHeroes, post, getOneHero, update, deleteHero
} = require('../controllers/callback');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(allHeroes)
    .post(post);

  heroRoutes
    .route('/:heroId')
    .get(getOneHero)
    .put(update)
    .delete(deleteHero);

  return heroRoutes;
}

module.exports = heroRouter();
