const { Router } = require('express');
const { get } = require('mongoose');
const cvControllers = require('../controllers/cvControllers');

function cvRouter() {
  const cvRouters = Router();

  cvRouters
    .route('/')
    .post(cvControllers.createCv)
    .get(cvControllers.getAll);

  cvRouters
    .route('/:userId')
    .get(cvControllers.getUserData)
    .put(cvControllers.updateCv);

  return cvRouters;
}

module.exports = cvRouter();
