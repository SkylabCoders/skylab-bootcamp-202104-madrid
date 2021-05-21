const marvelHeroes = require('../constantes/mockMarvel');

function marvelController() {
  const allCharacters = (req, res) => {
    res.json(marvelHeroes);
  };

  return {
    allCharacters
  };
}

module.exports = marvelController();
