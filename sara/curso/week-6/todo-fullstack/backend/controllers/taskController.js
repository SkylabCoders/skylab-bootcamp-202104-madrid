const Task = require('../models/taskModel');

module.exports = {
  getAll: async (req, res) => {
    try {
      const tasks = await Task.find(req.query);
      res.json(tasks);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  createTask: async (req, res) => {
    try {
      const newTask = await Task.create(req.body);
      res.send(newTask);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  findTaskById: async (req, res) => {
    const { taskId } = req.params('taskId');
    try {
      const task = await Task.findById(taskId);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
};
