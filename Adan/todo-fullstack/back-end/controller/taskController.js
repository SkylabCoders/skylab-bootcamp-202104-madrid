const debug = require('debug')('app:taskController');
const Task = require('../models/taskModel');

function taskController() {
  async function getAll(req, res) {
    Task.find(req, res);
    try {
      const tasks = await Task.find(req.query);
      res.json(tasks);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  async function create(req, res) {
    try {
      const newTask = await Task.create({
        ...req.body
      });
      res.json(newTask);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  async function getTaskById(req, res) {
    try {
      const { taskId } = req.params;
      const task = await Task.getTaskById(taskId);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  async function updateById(req, res) {
    try {
      const { taskId } = req.params;
      const taskUpdated = req.body;
      const task = await Task.findByIdAndUpdate(
        taskId,
        taskUpdated,
        { new: true, useFindAndModify: false }
      );
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  async function deleteById(req, res) {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(204);
    res.json();
  }
  return {
    getAll,
    create,
    getTaskById,
    updateById,
    deleteById
  };
}
module.exports = taskController();
