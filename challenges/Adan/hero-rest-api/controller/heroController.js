let heroes = require('../constants/heroMock');

function controller() {
  let maxHeroId;
  (function getHeroId() {
    const heroesOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  }());
  return {
    getAll: (req, res) => {
      res.json(heroes);
    },
    create: (req, res) => {
      maxHeroId += 1;
      const newHero = {
        ...req.body,
        id: maxHeroId
      };
      heroes.push(newHero);
      res.send(newHero);
    },
    getById: (req, res) => {
      const { heroId } = req.params;
      const hero = heroes.find(({ id }) => id === +heroId);
      res.json(hero);
    },
    updateById: (req, res) => {
      const { heroId } = req.params;
      let hero;
      heroes = heroes.map((currentHero) => {
        if (currentHero.id === +heroId) {
          hero = {
            ...hero,
            ...req.body
          };
          return hero;
        }
        return currentHero;
      });
      res.json(hero);
    },
    deleteById: (req, res) => {
      const { heroId } = req.params;
      heroes = heroes.filter((currentHero) => currentHero.id !== +heroId);

      res.status(204);
      res.json();
    }

  };
}
module.exports = controller();
