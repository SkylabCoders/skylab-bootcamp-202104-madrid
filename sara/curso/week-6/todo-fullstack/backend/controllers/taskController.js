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
};
