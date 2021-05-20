const heroes = require('../constants/heroesMock');

function heroesController() {
  const getAllHeroes = (req, res) => {
    res.send(heroes);
  };

  const getOneById = (req, res) => {
    const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);

    if (hero) {
      res.send(hero);
    } else {
      res.status(404);
      res.send('no encontré el heroe');
    }
  };

  const deleteById = (req, res) => {
    res.send(`se ha eliminado el hero con id: ${req.params.heroId}`);
  };

  const updateById = (req, res) => {
    res.send(`se ha actualizado el hero con id: ${req.params.heroId}`);
  };
  return {
    getAllHeroes,
    getOneById,
    deleteById,
    updateById,
  };
}

module.exports = heroesController();
