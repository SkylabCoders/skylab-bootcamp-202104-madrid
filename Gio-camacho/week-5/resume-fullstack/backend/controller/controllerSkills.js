const Skills = require('../models/skills');

function controllerSkills() {
  async function getAll(req, res) {
    try {
      const skills = await Skills.find(req.query);
      res.json(skills);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const skills = await Skills.create(req.body);
      res.json(skills);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const skills = await Skills.findByIdAndUpdate(
        req.params.skillsId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(skills);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      const skills = await Skills.findByIdAndDelete(
        req.params.skillsId
      );

      res.send(skills);
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

module.exports = controllerSkills();
