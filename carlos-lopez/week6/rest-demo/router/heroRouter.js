const express = require('express');
const heroes = require('../controllers/heroes');

const heroRoutes = express.Router();
const server = express();

function routes() {
  heroRoutes
    .route('/')
    .get(heroes.getTheHeroes);
  heroRoutes
    .route('/:heroId')
    .get(getAHero);
  server.use('/api/heroes', heroRoutes);

  return heroRoutes;

  // Escuchar las peticiones
}
module.exports = routes;
