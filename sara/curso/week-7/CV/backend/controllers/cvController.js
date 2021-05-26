const User = require('../models/cvModel');

module.exports = {

  getAll: async (req, res) => {
    try {
      const user = await User.find(req.query);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  getUserData: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  createUserCV: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  updateUserCV: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findByIdAndUpdate(userId, { ...req.body }, { new: true });
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

};
