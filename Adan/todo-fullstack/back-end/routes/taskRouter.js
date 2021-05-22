const { Router } = require('express');
const taskController = require('../controller/taskController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll)
    .post(taskController.create);
  taskRoutes
    .route('/:taskId')
    .put(taskController.updateById)
    .delete(taskController.deleteById);

  return taskRoutes;
}

module.exports = taskRouter();
