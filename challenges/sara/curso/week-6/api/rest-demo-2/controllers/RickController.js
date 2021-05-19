let Ricks = require('../constantes/rickMock');

let maxHeroId;

(function getHeroId() {
  const heroesOrdered = Ricks.sort((heroA, heroB) => heroA.id - heroB.id);
  maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
}());

module.exports = {
  getAllRicks: (req, res) => {
    res.json(Ricks);
  },
  getById: (req, res) => {
    const { heroId } = req.params;
    const hero = Ricks.find(({ id }) => id === +heroId);
    if (hero) {
      res.json(hero);
    } else {
      res.status(404);
      res.send('no encontré el rick');
    }
  },
  postHero: (req, res) => {
    maxHeroId += 1;
    const newHero = {
      id: maxHeroId,
      ...req.body,
    };
    Ricks.push(newHero);
    res.send(newHero);
  },
  putHero: (req, res) => {
    const { heroId } = req.params;
    let hero;
    Ricks = Ricks.map((currenthero) => {
      if (currenthero.id === +heroId) {
        hero = {
          ...currenthero,
          ...req.body,
        };
        return hero;
      }
      return currenthero;
    });
    res.json(hero);
  },

  deleteHero: (req, res) => {
    const { heroId } = req.params;
    Ricks = Ricks.filter((element) => element.id !== +heroId);
    res.status(204);
    res.json(heroId);
  },
};
