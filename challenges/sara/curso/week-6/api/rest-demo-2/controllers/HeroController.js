let Heroes = require('../constantes/heroMock');

let maxHeroId;

(function getHeroId() {
  const heroesOrdered = Heroes.sort((heroA, heroB) => heroA.id - heroB.id);
  maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
}());

module.exports = {
  getAll: (req, res) => {
    res.json(Heroes);
  },
  getById: (req, res) => {
    const { heroId } = req.params;
    const hero = Heroes.find(({ id }) => id === +heroId);
    if (hero) {
      res.json(hero);
    } else {
      res.status(404);
      res.send('no encontré el heroes');
    }
  },
  postHero: (req, res) => {
    maxHeroId += 1;
    const newHero = {
      id: maxHeroId,
      ...req.body,
    };
    Heroes.push(newHero);
    res.send(newHero);
  },
  putHero: (req, res) => {
    const { heroId } = req.params;
    let hero;
    Heroes = Heroes.map((currenthero) => {
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
    Heroes = Heroes.filter((element) => element.id !== +heroId);
    res.status(204);
    res.json(heroId);
  },
};
