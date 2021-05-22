const debug = require('debug');
const Task = require('../models/taskModel');

function taskController() {
  async function getAll(req, res) {
    try {
      const task = await Task.find(req.query);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.sen(error);
    }
  }

  async function create(req, res) {
    try {
      const task = await Task.create(req.body);
      debug(req.body);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.sen(error);
    }
  }

  return {
    create,
    getAll
  };
}

module.exports = taskController();
