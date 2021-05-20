const ramCharacters = require('../constants/ramMock');

function controller() {
  let maxHeroId;
  (function getHeroId() {
    const heroesOrdered = ramCharacters.sort(
      (characterA, characterB) => characterA.id - characterB.id
    );
    maxCharacterId = heroesOrdered[heroesOrdered.length - 1].id;
  }());
  return {
    getAll: (req, res) => {
      res.json(ramCharacters);
    },
    create: (req, res) => {
      maxCharacterId += 1;
      const newCharacter = {
        ...req.body,
        id: maxHeroId
      };
      ramCharacters.push(newCharacter);
      res.send(newCharacter);
    }

  };
}
module.exports = controller();
