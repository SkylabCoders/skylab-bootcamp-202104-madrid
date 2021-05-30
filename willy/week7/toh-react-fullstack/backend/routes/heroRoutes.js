const { Router } = require('express');
const {
  getAllHeroes, getById, createHero, updateById, deleteById
} = require('../controllers/heroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(getAllHeroes)
    .post(createHero);

  heroRoutes
    .route('/:heroId')
    .get(getById)
    .put(updateById)
    .delete(deleteById);

  return heroRoutes;
}

module.exports = heroRouter();
