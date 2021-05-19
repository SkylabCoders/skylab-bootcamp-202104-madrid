const express = require('express');
const heroes = require('../controllers/heroes');

const heroRoutes = express.Router();
const server = express();

function routes() {
  const getTheHeroes = (req, res) => {
    res.send(heroes);
  };
  const getAHero = (req, res) => {
    const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);
    if (hero) {
      res.send(hero);
    } else {
      res.status(404);
      res.send('no encontré el heroe');
    }
  };

  heroRoutes
    .route('/')
    .get(getTheHeroes);
  heroRoutes
    .route('/:heroId')
    .get(getAHero);
  server.use('/api/heroes', heroRoutes);

  return heroRoutes;

  // Escuchar las peticiones
}
module.exports = routes;
