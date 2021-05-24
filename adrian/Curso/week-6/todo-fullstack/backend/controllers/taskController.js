const Task = require('../model/taskModel');

module.exports = {
  getAll: async (req, res) => {
    try {
      const task = await Task.find(req.query);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send('find error');
    }
  },

  createTask: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  updateById: async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(
        (req.params.taskId),
        { ...req.body },
        { new: true, useFindAndModify: false }
      );
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send('update error');
    }
  },

  deleteById: async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(
        req.params.taskId
      );
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send('delete error');
    }
  }
};
