const Hero = require('../models/heroModels');

function controllerHeroes() {
  async function getAll(req, res) {
    try {
      const heroes = await Hero.find(req.query);
      res.json(heroes);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const hero = await Hero.create(req.body);
      res.json(hero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const hero = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.bodoy,
        { new: true },
      );
      res.json(hero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Hero.findOneAndDelete(
        req.params.heroId,
      );
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
    deleteById,
  };
}

module.exports = controllerHeroes();
