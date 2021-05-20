let heroes = require('../constants/heroMock');
const Hero = require('../models/heroModel');

function controller() {
  return {
    getAll: (req, res) => {
      if (req.query.name) {
        return res.json(
          heroes.filter(({ name }) => name.toLowerCase().includes(req.query.name.toLowerCase()))
        );
      }
      return res.json(heroes);
    },
    create: (req, res) => {
      const newHero = new Hero({
        ...req.body
      });
      heroes.push(newHero);
      newHero.save();
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
            ...currentHero,
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
