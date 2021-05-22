const { Router } = require('express');
const todoController = require('../controllers/todoController');

function todoRouter() {
  const todoRoutes = Router();
  todoRoutes
    .route('/')
    .get(todoController.getAll)
    .post(todoController.createTodo);

  todoRoutes
    .route('/:taskId')
    .get(todoController.getTaskById)
    .put(todoController.updateById)
    .delete(todoController.deleteById);

  return todoRoutes;
}
module.exports = todoRouter();
