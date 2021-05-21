const Hero = require('../models/heroModel');

function controller() {
  return {
    getAll: async (req, res) => {
      const query = { ...req.query };
      const heroes = await Hero.find(query);
      res.json(heroes);
    },

    create: (req, res) => {
      const newHero = new Hero({
        ...req.body
      });
      newHero.save();
      res.send(newHero);
    },
    getById: async (req, res) => {
      const { heroId } = req.params;
      const hero = await Hero.findById(heroId);
      res.json(hero);
    },
    updateById: async (req, res) => {
      const { heroId } = req.params;
      const dataToUpdate = req.body;
      const heroUpdated = await Hero.findByIdAndUpdate(
        heroId,
        dataToUpdate,
        { new: true }
      );
      res.json(heroUpdated);
    },
    deleteById: async (req, res) => {
      const { heroId } = req.params;
      await Hero.findByIdAndDelete(heroId);
      res.status(204);
      res.json();
    }

  };
}
module.exports = controller();
