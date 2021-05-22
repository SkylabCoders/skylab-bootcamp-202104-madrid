const Task = require('../models/taskModel');

function taskController() {
  async function create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.sen(error);
    }
  }

  return {
    create
  };
}

module.exports = taskController();
