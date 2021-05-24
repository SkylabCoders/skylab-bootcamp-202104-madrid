const { Router } = require('express');

const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRoutes = Router();

  cvRoutes
    .route('/')
    .get(cvController.getAll);
  return cvRoutes;
}

module.exports = cvRouter();
