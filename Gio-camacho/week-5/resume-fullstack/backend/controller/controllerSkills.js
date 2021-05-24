const Skills = require('../models/skills');

function controllerAboutMe() {
  async function getAll(req, res) {
    try {
      const about = await Skills.find(req.query);
      res.json(about);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const about = await Skills.create(req.body);
      res.json(about);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const about = await Skills.findByIdAndUpdate(
        req.params.skillsId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(about);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      const about = await Skills.findByIdAndDelete(
        req.params.skillsId
      );

      res.send(about);
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

module.exports = controllerAboutMe();
