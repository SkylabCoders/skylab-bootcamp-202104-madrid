const { Router } = require('express');
const taskController = require('../controller/taskController');

function taksRouter() {
  const taskRoutes = Router();

  taskRoutes
    .router('/')
    .post(taskController.create);
}

module.exports = taksRouter();
