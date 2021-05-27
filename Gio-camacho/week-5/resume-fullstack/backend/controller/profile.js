const Profile = require('../models/profile');

function controllerProfile() {
  async function getAll(req, res) {
    try {
      const profile = await Profile.find(req.query);
      res.json(profile);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const profile = await Profile.create(req.body);
      res.json(profile);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const profile = await Profile.findByIdAndUpdate(
        req.params.profileId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(profile);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Profile.findByIdAndDelete(req.params.profileId);
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

module.exports = controllerProfile();
