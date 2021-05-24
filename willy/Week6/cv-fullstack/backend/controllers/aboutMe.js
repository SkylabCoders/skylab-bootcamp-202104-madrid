const AboutMe = require('../model/aboutMeModels');

function controllerAbouteMe() {
  async function getAll(req, res) {
    try {
      const info = await AboutMe.find(req.query);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const info = await AboutMe.create(req.body);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const info = await AboutMe.findByIdAndUpdate(
        req.params.aboutMeId,
        req.body,
        { new: true }
      );
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await AboutMe.findByIdAndDelete(req.params.aboutMeId);
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

module.exports = controllerAbouteMe();
