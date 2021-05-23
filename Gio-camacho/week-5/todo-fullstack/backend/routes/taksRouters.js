const { Router } = require('express');
const taskController = require('../controller/taskController');

function taksRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll)
    .post(taskController.create);

  taskRoutes
    .route('/:taskId')
    .put(taskController.update);

  return taskRoutes;
}

module.exports = taksRouter();
