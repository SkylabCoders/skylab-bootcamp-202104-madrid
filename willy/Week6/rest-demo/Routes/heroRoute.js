const express = require('express');
const heroes = require('../constantes/mockHeros');

const routes = express.Router();
routes.route('/')
  .get((req, res) => {
    res.send(heroes);
  });

routes.route('/:heroId')
  .get((req, res) => {
    const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);

    if (hero) {
      res.send(hero);
    } else {
      res.status(404);
      res.send('no encontré el heroe');
    }
  })
  .delete((req, res) => {
    res.send(`se ha borrado el heroe con id: ${req.params.heroId}`);
  });
