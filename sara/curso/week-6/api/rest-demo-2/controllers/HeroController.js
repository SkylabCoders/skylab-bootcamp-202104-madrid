let Heroes = require('../constantes/heroMock');
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

  putHero: (req, res) => {
    const { heroId } = req.params;
    let hero;
    Heroes = Heroes.map((currenthero) => {
      if (currenthero.id === +heroId) {
        hero = {
          ...currenthero,
          ...req.body,
        };
        return hero;
      }
      return currenthero;
    });
    res.json(hero);
  },

  deleteHero: async (req, res) => {
    const { heroId } = req.params;
    const deletedHero = await Hero.findByIdAndDelete(heroId);
    res.json(deletedHero);
  },
};
