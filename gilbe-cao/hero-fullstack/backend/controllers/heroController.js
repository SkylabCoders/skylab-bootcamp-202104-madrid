let heroes = require('../constants/heroesMock');
const Hero = require('../models/heroModel');

function controller() {
  let maxHeroId;

  (function getHeroId() {
    const heroesOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  }());

  const getAll = (req, res) => {
    if (req.query.name) {
      return res.json(
        heroes.filter(
          ({ name }) => name.toLowerCase().includes(req.query.name.toLowerCase()),
        ),
      );
    }
    return res.json(heroes);
  };

  const create = (req, res) => {
    const newHero = new Hero({
      ...req.body,
    });

    newHero.save();

    res.send(newHero);
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
      { new: true },
    );

    res.json(heroUpdated);
  };

  const deleteById = (req, res) => {
    const { heroId } = req.params;
    heroes = heroes.filter(({ id }) => id !== +heroId);

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
