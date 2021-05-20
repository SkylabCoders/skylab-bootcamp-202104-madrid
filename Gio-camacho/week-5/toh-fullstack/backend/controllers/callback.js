let heroes = require('../constantes/mockHeroes');
const Hero = require('../models/heroModel');

function controller() {
  const allHeroes = (req, res) => {
    const heroName = req.query.name;
    if (heroName) {
      return res.json(
        heroes.filter(({ name }) => name.toLocaleLowerCase().includes(heroName.toLocaleLowerCase()))
      );
    }
    return res.json(heroes);
  };

  const post = (req, res) => {
    const newHero = new Hero({
      ...req.body
    });

    newHero.save(); /* Promesa */
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
