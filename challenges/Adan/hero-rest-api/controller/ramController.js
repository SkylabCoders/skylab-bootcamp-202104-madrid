const ramCharacters = require('../constants/ramMock');

function controller() {
  let maxCharacterId;
  (function getHeroId() {
    const characterOrdered = ramCharacters.sort(
      (characterA, characterB) => characterA.id - characterB.id
    );
    maxCharacterId = characterOrdered[characterOrdered.length - 1].id;
  }());
  return {
    getAll: (req, res) => {
      res.json(ramCharacters);
    },
    create: (req, res) => {
      maxCharacterId += 1;
      const newCharacter = {
        ...req.body,
        id: maxCharacterId
      };
      ramCharacters.push(newCharacter);
      res.send(newCharacter);
    }

  };
}
module.exports = controller();
