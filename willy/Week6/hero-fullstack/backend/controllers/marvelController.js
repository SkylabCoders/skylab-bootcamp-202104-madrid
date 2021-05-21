const marvelHeroes = require('../constantes/mockMarvel')

function marvelController() {
    
    const getAllHeroes = (req, res) => {
      res.json(marvelHeroes);
    };
  
    return {
      getAllHeroes,
      
    };
  }
  module.exports = marvelController();
