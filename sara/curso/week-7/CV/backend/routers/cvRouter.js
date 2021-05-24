const { Router } = require('express');
const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRouters = Router();

  cvRouters
    .route('/')
    // .get(cvController.getAll)
    .post(cvController.createUserCV);

  cvRouters
    .route('/:userId')
    .get(cvController.getUserData)
    .put(cvController.updateUserCV);

  return cvRouters;
}

module.exports = cvRouter();
