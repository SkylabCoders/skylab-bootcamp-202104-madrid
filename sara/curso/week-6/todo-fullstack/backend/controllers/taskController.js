const debug = require('debug')('app');
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
    const task = await Task.create(req.body);
    res.json(task);
    debug(req.body);
  },

  findTaskById: async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await Task.findById(taskId);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

};
