/* eslint-disable no-console */
const Hero = require('../models/heroModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };
    const heroes = await Hero.find(query);
    return res.json(heroes);
  };
  const createHero = async (req, res) => {
    const newHero = await Hero.create({
      ...req.body,
    });
    res.json(newHero);
  };
  const getHero = async (req, res) => {
    const { heroId } = req.params;
    const hero = await Hero.findById(heroId);
    res.json(hero);
  };
  const modifyHero = async (req, res) => {
    const { heroId } = req.params;
    const dataToUpdate = req.body;
    const heroUpdated = await Hero.findByIdAndUpdate(
      heroId,
      dataToUpdate,
      { new: true },
    );
    res.json(heroUpdated);
  };
  const deleteHero = async (req, res) => {
    const { heroId } = req.params;
    await Hero.findByIdAndDelete(heroId);
    res.status(204);
    res.json();
  };
  return {
    getAll,
    createHero,
    getHero,
    modifyHero,
    deleteHero,
  };
}

module.exports = controller();
