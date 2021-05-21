const debug = require('debug')('server:callback');
const Hero = require('../models/heroModel');

debug('haaa');
function controller() {
  const getAllHeroes = async (req, res) => {
    const query = { ...res.query };

    try {
      const allHeroes = await Hero.find(query);
      res.json(allHeroes);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createHero = (req, res) => {
    const newHero = new Hero({
      ...req.body
    });

    newHero.save(); /* Promesa */
    res.send(newHero);
  };

  const getHeroById = async (req, res) => {
    const { heroId } = req.params;

    const hero = await Hero.findById(heroId);

    res.json(hero);
  };

  const updateHeroById = async (req, res) => {
    const { heroId } = req.params;

    const dataToUpdate = req.body;

    const heroUpdate = await Hero.findByIdAndUpdate(
      heroId,
      dataToUpdate,
      { new: true }
    );

    res.json(heroUpdate);
  };

  const deleteHeroById = async (req, res) => {
    const { heroId } = req.params;

    await Hero.findByIdAndDelete(heroId);

    res.status(204);
    res.json();
  };

  return {
    getAllHeroes,
    createHero,
    getHeroById,
    updateHeroById,
    deleteHeroById
  };
}

module.exports = controller();
