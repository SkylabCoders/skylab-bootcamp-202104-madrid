const { Router } = require('express');

const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRoutes = Router();

  cvRoutes
    .route('/')
    .get(cvController.getAll)
    .post(cvController.create);

  cvRoutes
    .route('/:id')
    .delete(cvController.deleteById);

  return cvRoutes;
}

module.exports = cvRouter();
