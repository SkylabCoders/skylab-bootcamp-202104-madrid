const Hero = require('../models/heroModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };

    try {
      const heroes = await Hero.find(query);
      res.json(heroes);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const create = async (req, res) => {
    try {
      const newHero = await Hero.create({
        ...req.body,
      });
      res.json(newHero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getById = async (req, res) => {
    const { heroId } = req.params;
    try {
      const hero = await Hero.findById(heroId);
      res.json(hero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateById = async (req, res) => {
    const { heroId } = req.params;
    const dataToUpdate = req.body;

    try {
      const heroUpdated = await Hero.findByIdAndUpdate(
        heroId,
        dataToUpdate,
        { new: true, useFindAndModify: false },
      );

      res.json(heroUpdated);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteById = async (req, res) => {
    const { heroId } = req.params;

    try {
      await Hero.findByIdAndDelete(heroId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getAll,
    create,
    updateById,
    deleteById,
    getById,
  };
}
module.exports = controller();
