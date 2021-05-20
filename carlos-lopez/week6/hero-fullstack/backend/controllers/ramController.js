/* eslint-disable no-console */
let heroes = require('../constants/ramJSON.json');

function controller() {
  let maxHeroId;
  (function getHeroId() {
    const heroesOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  }());

  const getAll = (req, res) => {
    res.json(heroes);
  };
  const createHero = (req, res) => {
    maxHeroId += 1;
    const newHero = {
      ...req.body,
      id: maxHeroId,
    };
    heroes.push(newHero);
    res.send(newHero);
  };
  const getHero = (req, res) => {
    const { heroId } = req.params;
    const hero = heroes.find(({ id }) => id === +heroId);
    res.json(hero);
  };
  const modifyHero = (req, res) => {
    const { heroId } = req.params;
    let hero;
    // El método map nos va a sobrescribir el array de heroes todo el tiempo
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
  const deleteHero = (req, res) => {
    const { heroId } = req.params;
    heroes = heroes.filter((hero) => hero.id !== +heroId);
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
