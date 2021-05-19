const express = require('express');
const Heroes = require('../constantes/heroMock');

function heroRouter() {
  const heroRoutes = express.Router();
  heroRoutes
    .route('/')
    .get((req, res) => {
      res.send(Heroes);
    });
  heroRoutes
    .route('/:heroId')
    .get((req, res) => {
      const hero = Heroes.find((currentHero) => currentHero.id === +req.params.heroId);
      if (hero) {
        res.send(hero);
      } else {
        res.status(404);
        res.send('no encontré el heroes');
      }
    });

  return heroRoutes;
}

module.exports = heroRouter();
