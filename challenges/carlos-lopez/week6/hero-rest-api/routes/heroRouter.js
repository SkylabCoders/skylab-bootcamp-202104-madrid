const { Router } = require('express');
const heroes = require('../controllers/heroesJSON');

function heroRouter() {
  const heroRoutes = Router();
  heroRoutes
    .route('/')
    .get((req, res) => {
      res.json(heroes);
    });
  heroRoutes
    .route('/prueba/post')
    .post((req, res) => {
      res.send('Te posteo');
    });
  heroRoutes
    .route('/prueba/put')
    .put((req, res) => {
      res.send('Te puteo');
    });
  return heroRoutes;
}
module.exports = heroRouter();
