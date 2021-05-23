const { Router } = require('express');
const {
  getAll, create, updateById, deleteById
} = require('../controllers/infoControllers');

function infoRouter() {
  const infoRoutes = Router();

  infoRoutes
    .route('/')
    .get(getAll)
    .post(create);

  infoRoutes
    .route('/:infoId')
    .put(updateById)
    .delete(deleteById);

  return infoRoutes; // fundamental que esta funcion retorne las tareas
}

module.exports = infoRouter();
