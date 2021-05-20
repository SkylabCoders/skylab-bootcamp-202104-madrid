const { Router } = require('express');
const RickController = require('../controllers/RickController');

function rickRouter() {
  const rickRoutes = Router();

  rickRoutes
    .route('/api/ricks')
    .get(RickController.getAllRicks)
    .post(RickController.postRick);

  rickRoutes
    .route('/api/ricks/:rickId')
    .get(RickController.getById)
    .put(RickController.putRick)
    .delete(RickController.deletRick);

  return rickRoutes;
}

module.exports = rickRouter();
