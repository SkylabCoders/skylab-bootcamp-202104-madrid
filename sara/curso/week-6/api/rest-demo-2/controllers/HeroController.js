let Heroes = require('../constantes/heroMock');
const Hero = require('../models/heroModel');

module.exports = {

  getAll: async (req, res) => {
    const heroes = await Hero.find(req.query);
    res.json(heroes);
  },

  getById: (req, res) => {
    const { heroId } = req.params;
    const hero = Heroes.find(({ id }) => id === +heroId);
    if (hero) {
      res.json(hero);
    } else {
      res.status(404);
      res.send('no encontré el heroes');
    }
  },

  postHero: async (req, res) => {
    const newHero = new Hero({
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

  deleteHero: (req, res) => {
    const { heroId } = req.params;
    Hero.findByIdAndDelete(heroId);
    res.status(204);
    res.json(heroId);
  },
};
