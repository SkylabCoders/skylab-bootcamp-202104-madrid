const { Router } = require('express');

function infoRouter() {
  const infoRoutes = Router();

  infoRoutes
    .route('/')
    .get()
    .post();

  infoRoutes
    .route('/:InfoId')
    .put()
    .delete();

  return infoRoutes; // fundamental que esta funcion retorne las tareas
}

module.exports = infoRouter();
