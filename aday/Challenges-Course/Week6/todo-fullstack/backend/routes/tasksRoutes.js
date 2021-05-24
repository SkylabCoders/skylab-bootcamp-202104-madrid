const { Router } = require('express');
const tasksController = require('../controllers/tasksController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(tasksController.getAll)
    .post(tasksController.create);

  taskRoutes
    .route('/:taskId')
    .get(tasksController.getById)
    .put(tasksController.update)
    .delete(tasksController.deleteTask);

  return taskRoutes;
}

module.exports = taskRouter();
