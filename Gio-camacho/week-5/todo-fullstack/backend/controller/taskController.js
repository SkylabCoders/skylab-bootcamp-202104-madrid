const Task = require('../models/taskModel');

function taskController() {
  async function getAll(req, res) {
    try {
      const task = await Task.find(req.query);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.json(task);
    } catch (error) {
      res.status(500);
      res.send(error);
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
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    create,
    getAll,
    update,
    deleteById
  };
}

module.exports = taskController();
