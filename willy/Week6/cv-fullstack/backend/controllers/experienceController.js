const Experience = require('../model/experience');

function controllerExperience() {
  async function getAll(req, res) {
    try {
      const experience = await Experience.find(req.query);
      res.json(experience);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const experience = await Experience.create(req.body);
      res.json(experience);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const experience = await Experience.findByIdAndUpdate(
        req.params.expId,
        req.body,
        { new: true }
      );
      res.json(experience);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Experience.findByIdAndDelete(req.params.experienceId);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAll, create, updateById, deleteById
  };
}

module.exports = controllerExperience();
