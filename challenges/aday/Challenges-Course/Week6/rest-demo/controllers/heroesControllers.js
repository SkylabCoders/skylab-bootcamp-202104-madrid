let heroes = require('../constants/heroesMock');

function heroesController() {
  let maxHeroId;

  // IIEF:

  (function getHeroI() {
    const heroesOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  }());

  // //Función sin IIEF:

  // const getHeroId = () => {
  //   const heroesOrdered = heroes.sort((heroA, heroB) => heroA.id - heroB.id);
  //   maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  // };

  // getHeroId();

  const getAllHeroes = (req, res) => {
    res.send(heroes);
  };

  const createHeroes = (req, res) => {
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

// respuesta diferente para el getById:
/*
    res.send(heroes.find((hero) => hero.id === +req.params.heroId));
    */
