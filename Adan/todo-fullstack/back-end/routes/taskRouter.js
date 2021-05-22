const { Router } = require('express');
const taskController = require('../controller/taskController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/')
    .get(taskController.getAll);
}
