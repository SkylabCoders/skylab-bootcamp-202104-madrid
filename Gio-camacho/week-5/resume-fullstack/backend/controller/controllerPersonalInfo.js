const PersonalInfo = require('../models/personalInfo');

function controllerPersonalInfo() {
  async function getAll(req, res) {
    try {
      const info = await PersonalInfo.find(req.query);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const info = await PersonalInfo.create(req.body);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const info = await PersonalInfo.findByIdAndUpdate(
        req.params.infoId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await PersonalInfo.findByIdAndDelete(req.params.infoId);
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
    updateById,
    deleteById
  };
}

module.exports = controllerPersonalInfo();
