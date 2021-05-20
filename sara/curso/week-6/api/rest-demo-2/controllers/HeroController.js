const Heroes = require('../constantes/heroMock');
const Hero = require('../models/heroModel');

module.exports = {

  getAll: async (req, res) => {
    const heroes = await Hero.find(req.query);
    res.json(heroes);
  },

  getById: async (req, res) => {
    const { heroId } = req.params;
    const hero = await Hero.findById(heroId);
    res.json(hero);
  },

  postHero: async (req, res) => {
    const newHero = await new Hero({
      ...req.body,
    });
    newHero.save();
    res.send(newHero);
  },

  putHero: async (req, res) => {
    const { heroId } = req.params;
    const hero = await Hero.findByIdAndUpdate(heroId, { ...req.body }, { new: true });
    res.json(hero);
  },

  deleteHero: async (req, res) => {
    const { heroId } = req.params;
    const deletedHero = await Hero.findByIdAndDelete(heroId);
    res.json(deletedHero);
  },
};
