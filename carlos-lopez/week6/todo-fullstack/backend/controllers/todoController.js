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
  const getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await Todo.findById(taskId);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
  const updateById = async (req, res) => {
    const { taskId } = req.params;
    const dataToUpdate = req.body;
    try {
      const taskUpdated = await Todo.findByIdAndUpdate(
        taskId,
        dataToUpdate,
        { new: true, useFindAndModify: false },
      );
      res.json(taskUpdated);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
  const deleteById = async (req, res) => {
    const { taskId } = req.params;
    try {
      await Todo.findByIdAndDelete(taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getAll,
    createTodo,
    getTaskById,
    updateById,
    deleteById,
  };
}

module.exports = controller();
