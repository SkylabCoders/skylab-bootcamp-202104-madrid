let heroes = require('../constantes/mockHeroes');

function controller() {
  let maxHeroId;

  (function getHeroId() {
    const heroOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroOrdered[heroOrdered.length - 1].id;
  }());

  const allHeroes = (req, res) => {
    if (req.query.name) {
      return res.json(
        heroes.filter(({ name }) => name.toLocaleLowerCase().includes(req.query.name))
      );
    }
    return res.json(heroes);
  };

  const post = (req, res) => {
    maxHeroId += 1;
    const newHero = {
      ...req.body,
      id: maxHeroId
    };
    heroes.push(newHero);
    res.send(newHero);
  };

  const getOneHero = (req, res) => {
    const { heroId } = req.params;
    const hero = heroes.find(({ id }) => id === +heroId);
    res.json(hero);
  };

  const update = (req, res) => {
    const { heroId } = req.params;
    let hero;
    heroes = heroes.map((currentHero) => {
      if (currentHero.id === +heroId) {
        hero = {
          ...currentHero,
          ...req.body,
          modify: new Date()
        };
        return hero;
      }
      return currentHero;
    });

    res.json(hero);
  };

  const deleteHero = (req, res) => {
    const { heroId } = req.params;
    heroes = heroes.filter((hero) => hero.id !== +heroId);
    res.status(204);
    res.json();
  };

  return {
    allHeroes,
    post,
    getOneHero,
    update,
    deleteHero
  };
}

module.exports = controller();
