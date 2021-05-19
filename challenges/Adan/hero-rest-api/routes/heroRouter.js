const Router = require('express');
const heroes = require('../controller/heroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get((req, res) => {
      res.json(heroes);
    })
    .put((req, res) => {
      res.send('te puteo');
    });

  return heroRoutes;
}

module.exports = heroRouter();
