const { Router } = require('express');
const taskController = require('../controllers/taskController');

function taskRouter() {
  const taskRouters = Router();

  taskRouters
    .route('/')
    .get(taskController.getAll)
    .post(taskController);

  taskRouters
    .route('/:taskId')
    .get(taskController.findTaskById)
    .put(taskController)
    .delete(taskController);

  return taskRouters;
}

module.exports = taskRouter();
