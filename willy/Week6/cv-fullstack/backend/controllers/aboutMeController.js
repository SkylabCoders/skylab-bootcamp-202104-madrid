const AboutMe = require('../model/aboutMeModels');

function controllerAboutMe() {
  async function getAll(req, res) {
    try {
      const about = await AboutMe.find(req.query);
      res.json(about);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const about = await AboutMe.create(req.body);
      res.json(about);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const about = await AboutMe.findByIdAndUpdate(
        req.params.aboutMeId,
        req.body,
        { new: true }
      );
      res.json(about);
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

module.exports = controllerAboutMe();
