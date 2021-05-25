const debug = require('debug')('app');
const User = require('../models/cvModels');

module.exports = {

  createCv: async (req, res) => {
    try {
      debug(req.body);
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.send(error);
    }
  },

  getUserData: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch (error) {
      res.send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const userList = await User.find(req.query);
      res.json(userList);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  updateCv: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findByIdAndUpdate(userId,
        { ...req.body },
        { new: true });
      res.json(user);
    } catch (error) {
      res.status(500);
    }
  }
};
