const AboutMe = require('../models/aboutMe');

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
        req.params.aboutId,
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
      const about = await AboutMe.findByIdAndDelete(
        req.params.aboutId
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
