let heroes = require('../constants/heroesMock');

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
    maxHeroId += 1;
    const newHero = {
      ...req.body,
      id: maxHeroId,
    };
    heroes.push(newHero);
    res.send(newHero);
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
