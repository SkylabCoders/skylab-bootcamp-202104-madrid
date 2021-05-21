const Hero = require('../models/heroModel');

module.exports = {

  getAll: async (req, res) => {
    try {
      const heroes = await Hero.find(req.query);
      res.json(heroes);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  getById: async (req, res) => {
    const { heroId } = req.params;
    try {
      const hero = await Hero.findById(heroId);
      res.json(hero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  postHero: async (req, res) => {
    try {
      const newHero = new Hero({
        ...req.body,
      });
      await newHero.save();
      res.send(newHero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  putHero: async (req, res) => {
    const { heroId } = req.params;
    try {
      const hero = await Hero.findByIdAndUpdate(heroId, { ...req.body }, { new: true });
      res.json(hero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },

  deleteHero: async (req, res) => {
    const { heroId } = req.params;
    try {
      const deletedHero = await Hero.findByIdAndDelete(heroId);
      res.json(deletedHero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
};
