const { Router } = require('express');
const traskController = require('../controllers/taskController');

const taskController = require('../controllers/taskController');

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
