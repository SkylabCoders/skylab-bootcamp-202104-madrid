const { Router } = require('express');

const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/controllerAboutMe');

function controllerPersonalInfo() {
  const aboutRoutes = Router();

  aboutRoutes
    .route('/')
    .get(getAll)
    .post(create);

  aboutRoutes
    .route('/:aboutId')
    .put(updateById)
    .delete(deleteById);
  return aboutRoutes;
}

module.exports = controllerPersonalInfo();
