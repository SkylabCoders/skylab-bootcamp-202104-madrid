const debug = require('debug')('app:heroController');
const Hero = require('../models/heroModel');

function controller() {
  return {
    getAll: async (req, res) => {
      debug('esto es un debug en controller');
      const query = { ...req.query };
      try {
        const heroes = await Hero.find(query);
        res.json(heroes);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    },

    create: async (req, res) => {
      try {
        const newHero = await Hero.create({
          ...req.body
        });

        res.json(newHero);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
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
