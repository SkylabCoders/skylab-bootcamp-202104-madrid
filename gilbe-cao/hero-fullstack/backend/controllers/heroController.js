const Hero = require('../models/heroModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };

    const heroes = await Hero.find(query);

    return res.json(heroes);
  };

  const create = async (req, res) => {
    const newHero = await Hero.create({
      ...req.body,
    });

    res.json(newHero);
  };

  const getById = async (req, res) => {
    const { heroId } = req.params;

    const hero = await Hero.findById(heroId);

    res.json(hero);
  };

  const updateById = async (req, res) => {
    const { heroId } = req.params;
    const dataToUpdate = req.body;

    const heroUpdated = await Hero.findByIdAndUpdate(
      heroId,
      dataToUpdate,
      { new: true, useFindAndModify: false },
    );

    res.json(heroUpdated);
  };

  const deleteById = async (req, res) => {
    const { heroId } = req.params;
    await Hero.findByIdAndDelete(heroId);

    res.status(204);
    res.json();
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
