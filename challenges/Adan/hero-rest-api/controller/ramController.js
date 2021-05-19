const ramCharacters = require('../constants/ramMock');

function controller() {
  let maxHeroId;
  (function getHeroId() {
    const heroesOrdered = ramCharacters.sort(
      (characterA, characterB) => characterA.id - characterB.id
    );
    maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
  }());
  return {
    getAll: (req, res) => {
      res.json(ramCharacters);
    },
    create: (req, res) => {
      maxHeroId += 1;
      const newHero = {
        ...req.body,
        id: maxHeroId
      };
      ramCharacters.push(newHero);
      res.send(newHero);
    }

  };
}
module.exports = controller();
