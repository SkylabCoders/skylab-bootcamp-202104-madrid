const { Router } = require('express');

const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/controllerSkills');

function controllerPersonalInfo() {
  const skillsRoutes = Router();

  skillsRoutes
    .route('/')
    .get(getAll)
    .post(create);

  skillsRoutes
    .route('/:skillsId')
    .put(updateById)
    .delete(deleteById);

  return skillsRoutes;
}

module.exports = controllerPersonalInfo();
