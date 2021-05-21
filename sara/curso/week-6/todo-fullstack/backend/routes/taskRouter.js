const { Router } = require('express');
const taskController = require('../controllers/taskController');

function taskRouter() {
  const taskRouters = Router();

  taskRouters
    .route('/')
    .get(taskController.getAll);

  return taskRouters;
}

module.exports = taskRouter();
