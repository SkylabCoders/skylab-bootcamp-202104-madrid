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
      res.json(task);
    } catch (error) {
      res.status(500);
      res.sen(error);
    }
  }

  async function update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.taskId,
        req.body,
        { new: true, useFindAndModify: false }
      );
      res.json(task);
    } catch (error) {
      res.status(500);
      res.sen(error);
    }
  }

  return {
    create,
    getAll,
    update
  };
}

module.exports = taskController();
