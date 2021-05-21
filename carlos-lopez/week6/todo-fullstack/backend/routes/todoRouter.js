const { Router } = require('express');
const todoController = require('../controllers/todoController');

function todoRouter() {
  const todoRoutes = Router();
  todoRoutes
    .route('/')
    .get(todoController.getAll)
    .post(todoController.createTodo);
  return todoRoutes;
}
module.exports = todoRouter();
