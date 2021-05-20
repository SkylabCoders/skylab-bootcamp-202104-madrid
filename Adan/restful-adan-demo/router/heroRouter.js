const express = require('express');
const heroes = require('../controllers/heroesController');

function routerFunc() {
  const routes = express.Router();
  routes
    .route('/')
    .get((req, res) => {
      res.send(heroes);
    });

  routes
    .route('/:heroId')
    .get((req, res) => {
      const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);
      if (hero) {
        res.send(hero);
      } else {
        res.status(404);
        res.send('no encontre el heroe');
      }
    });
}
module.exports = routerFunc;
