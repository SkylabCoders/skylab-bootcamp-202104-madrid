const Hero = require('../models/heroModel');

function heroesController() {
  const getAllHeroes = (req, res) => {
    if (req.query.name) {
      return res.json(
        heroes.filter(
          ({ name }) => name.toLowerCase().includes(req.query.name.toLowerCase()),
        ),
      );
    }
    return res.send(heroes);
  };

  const createHeroes = async (req, res) => {
    const newHero = await Hero.create({
      ...req.body,
    });
    res.json(newHero);
  };

  const getById = (req, res) => {
    const { heroId } = req.params;
    const hero = heroes.find(({ id }) => id === +heroId);
    res.json(hero);
  };

  const updateById = (req, res) => {
    const { heroId } = req.params;
    let hero;

    heroes = heroes.map((currentHero) => {
      if (currentHero.id === +heroId) {
        hero = {
          ...currentHero,
          ...req.body,
          modified: new Date(),
        };
        return hero;
      }
      return currentHero;
    });
    res.json(hero);
  };

  const deleteHeroes = (req, res) => {
    const { heroId } = req.params;
    heroes = heroes.filter(({ id }) => id !== +heroId);
    res.status(204);
    res.json();
  };

  return {
    getAllHeroes,
    createHeroes,
    getById,
    deleteHeroes,
    updateById,
  };
}

module.exports = heroesController();
