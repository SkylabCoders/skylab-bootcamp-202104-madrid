const { Router } = require('express');
const taskController = require('../controllers/taskController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll)
    .post(taskController.create);

  taskRoutes
    .route('/:taskId')
    .delete(taskController.deleteById)
    .put(taskController.update);

  return taskRoutes;
}

module.exports = taskRouter();
