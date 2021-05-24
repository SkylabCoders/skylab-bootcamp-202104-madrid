const { Router } = require('express');
const cvController = require('../controllers/cvController');

function cvRouter() {
  const cvRoutes = Router();
  cvRoutes
    .route('/')
    .get(cvController.getAll)
    .post(cvController.createInfo);
  cvRoutes
    .route('/:cvId')
    .get(cvController.getCvById)
    .put(cvController.updateById);
  return cvRoutes;
}
module.exports = cvRouter();
