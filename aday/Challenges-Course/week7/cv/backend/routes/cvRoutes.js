const express = require('express');
const controller = require('../controllers/cvController');

function router() {
  const routes = express.Router();

  routes
    .route('/')
    .get(controller.getAllCvs)
    .post(controller.createCv);

  routes
    .route('/:dni')
    .get(controller.getByDni)
    .put(controller.updateCv)
    .delete(controller.deleteCv);

  return routes;
}

module.exports = router();
