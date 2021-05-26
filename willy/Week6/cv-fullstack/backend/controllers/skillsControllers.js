const Skills = require('../model/skills');

function controllerSkills() {
  async function getAll(req, res) {
    try {
      const skill = await Skills.find(req.query);
      res.json(skill);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const skill = await Skills.create(req.body);
      res.json(skill);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const skill = await Skills.findByIdAndUpdate(
        req.params.skillId,
        req.body,
        { new: true }
      );
      res.json(skill);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Skills.findByIdAndDelete(req.params.skillId);
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

module.exports = controllerSkills();
