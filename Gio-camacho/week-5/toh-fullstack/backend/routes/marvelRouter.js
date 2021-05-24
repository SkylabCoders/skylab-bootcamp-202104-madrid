const { Router } = require('express');
// const { allCharacters } = require('../controllers/marvelController');

function marvelRouter() {
  const marvelRoutes = Router();
  marvelRoutes
    .route('/');
  // .get(allCharacters);

  return marvelRoutes;
}

module.exports = marvelRouter();
