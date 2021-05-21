/* eslint-disable no-console */
const debug = require('debug')('app:heroController');
const Hero = require('../models/heroModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };
    try {
      const heroes = await Hero.find(query);
      debug(heroes);
      res.json(heroes);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
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
