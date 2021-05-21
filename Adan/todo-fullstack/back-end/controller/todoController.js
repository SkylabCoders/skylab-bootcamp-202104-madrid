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
  return {
    getAll
  };
}
module.exports = taskController;
