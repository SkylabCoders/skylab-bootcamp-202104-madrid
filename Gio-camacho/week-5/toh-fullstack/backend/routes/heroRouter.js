const { Router } = require('express');
const {
  getAllHeroes, createHero, getHeroById, updateHeroById, deleteHeroById
} = require('../controllers/callback');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(getAllHeroes)
    .post(createHero);

  heroRoutes
    .route('/:heroId')
    .get(getHeroById)
    .put(updateHeroById)
    .delete(deleteHeroById);

  return heroRoutes;
}

module.exports = heroRouter();
