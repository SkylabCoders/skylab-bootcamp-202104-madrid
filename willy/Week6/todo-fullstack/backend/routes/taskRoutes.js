const { Router } = require('express');
const traskController = require('../controllers/traskController');

const taskController = require('../controllers/traskController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll)
    .post(traskController.create);

  taskRoutes
    .route('/:taskId')
    .put(taskController.updateById)
    .delete(taskController.deleteById);

  return taskRoutes; // fundamental que esta funcion retorne las tareas
}

module.exports = taskRouter();
