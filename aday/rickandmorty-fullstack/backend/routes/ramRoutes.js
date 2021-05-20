const express = require('express');
const ramController = require('../controllers/ramControllers');

function ramRouter() {
  const ramRoutes = express.Router();

  ramRoutes
    .route('/')
    .get(ramController.getAllCharacters);

  return ramRoutes;
}

module.exports = ramRouter();
