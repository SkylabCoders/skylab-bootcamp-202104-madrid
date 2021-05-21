const Task = require('../models/tasksModels');

function tasksController() {
  async function getAll(req, res) {
    try {
      const tasks = await Task.find(req.query);
      res.json(tasks);
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
      const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteTask(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAll,
    create,
    update,
    deleteTask,
  };
}

module.exports = tasksController();
