const Experience = require('../models/experience');

function controllerExperiences() {
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
        req.params.experiencesId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(experience);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      const experience = await Experience.findByIdAndDelete(
        req.params.experiencesId
      );

      res.send(experience);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAll,
    create,
    updateById,
    deleteById
  };
}

module.exports = controllerExperiences();
