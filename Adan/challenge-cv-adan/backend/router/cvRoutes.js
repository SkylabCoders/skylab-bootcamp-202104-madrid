const { Router } = require('express');

const taskController = require('../controllers/cvController');

function taskRouter() {
  const taskRoutes = Router();

  taskRoutes
    .route('/');
}
