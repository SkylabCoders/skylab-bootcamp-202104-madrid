const { Router } = require('express');
const taskController = require('../controllers/taskController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll)
    .post(taskController.createTask);

  taskRoutes
    .route('/:taskId')
    .put(taskController.updateById)
    .delete(taskController.deleteById);

  return taskRoutes;
}

module.exports = taskRouter();
