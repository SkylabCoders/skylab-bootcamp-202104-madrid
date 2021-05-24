const { Router } = require('express');
const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/controllerPersonalInfo');

function controllerPersonalInfo() {
  const personalInfoRoutes = Router();

  personalInfoRoutes
    .route('/')
    .get(getAll)
    .post(create);

  personalInfoRoutes
    .route('/:infoId')
    .put(updateById)
    .delete(deleteById);
  return personalInfoRoutes;
}

module.exports = controllerPersonalInfo();
