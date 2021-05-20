let heroes = require('../constantes/mockHeroes');
const Hero = require('../models/heroModel');

function controller() {
  const getAllHeroes = async (req, res) => {
    const query = { ...res.query };

    const allHeroes = await Hero.find(query);

    res.json(allHeroes);
  };

  const createHero = (req, res) => {
    const newHero = new Hero({
      ...req.body
    });

    newHero.save(); /* Promesa */
    res.send(newHero);
  };

  const getHeroById = async (req, res) => {
    const { heroId } = req.params;

    const hero = await Hero.findById(heroId);

    res.json(hero);
  };

  const updateHeroById = (req, res) => {
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

  const deleteHeroById = (req, res) => {
    const { heroId } = req.params;
    heroes = heroes.filter((hero) => hero.id !== +heroId);
    res.status(204);
    res.json();
  };

  return {
    getAllHeroes,
    createHero,
    getHeroById,
    updateHeroById,
    deleteHeroById
  };
}

module.exports = controller();
