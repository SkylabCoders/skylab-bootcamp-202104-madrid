const Task = require('../model/taskModel');

function taskController() {
  function getAll(req, res) {
    try {
      const task = Task.find(req.query);
      res.json(task);
    } catch (error) {
      res;
    }
  }
}

module.exports = taskController;
