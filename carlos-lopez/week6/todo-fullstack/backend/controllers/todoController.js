const debug = require('debug')('app:todoController');
const Todo = require('../models/todoModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };
    try {
      const todos = await Todo.find(query);
      debug(todos);
      res.json(todos);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
  const createTodo = async (req, res) => {
    const newTodo = await Todo.create({
      ...req.body,
    });
    res.json(newTodo);
  };

  return {
    getAll,
    createTodo,
  };
}

module.exports = controller();
