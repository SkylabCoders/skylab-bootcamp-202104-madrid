const { Router } = require('express');

const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRoutes = Router();

  cvRoutes
    .route('/')
    .get(cvController.getAll)
    .post(cvController.create);

  cvRoutes
    .route('/cvId')
    .post(cvController.create);
  return cvRoutes;
}

module.exports = cvRouter();
