const Router = require('express');
const ramController = require('../controller/ramController');

function heroRouter() {
  const characterRoutes = Router();

  characterRoutes
    .route('/')
    .get(ramController.getAll)
    .post(ramController.create);

  return characterRoutes;
}

module.exports = heroRouter();
