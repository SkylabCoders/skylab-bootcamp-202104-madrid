const { Router } = require('express');

const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/controllerExperiences');

function controllerPersonalInfo() {
  const experiencesRoutes = Router();

  experiencesRoutes
    .route('/')
    .get(getAll)
    .post(create);

  experiencesRoutes
    .route('/:experiencesId')
    .put(updateById)
    .delete(deleteById);

  return experiencesRoutes;
}

module.exports = controllerPersonalInfo();
