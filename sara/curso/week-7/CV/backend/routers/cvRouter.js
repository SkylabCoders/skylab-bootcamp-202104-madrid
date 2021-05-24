const { Router } = require('express');
const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRouters = Router();

  cvRouters
    .route('/')
    .get(cvController.getAll)
    .post(cvController.createUserCV);

  cvRouters
    .route('/:name')
    .get(cvController.getCV)
    .put(cvController.updateCV);

  return cvRouters;
}

module.exports = cvRouter();
