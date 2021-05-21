let ramCharacter = require('../constants/ramJSON.json');

function controller() {
  let maxCharacterId;
  (function getCharacterId() {
    const ramCharacterOrdered = ramCharacter.sort(
      (characterA, characterB) => characterA.id - characterB.id,
    );
    maxCharacterId = ramCharacterOrdered[ramCharacterOrdered.length - 1].id;
  }());

  const getAllCharacters = (req, res) => {
    res.json(ramCharacter);
  };
  const createCharacter = (req, res) => {
    maxCharacterId += 1;
    const newCharacter = {
      ...req.body,
      id: maxCharacterId,
    };
    ramCharacter.push(newCharacter);
    res.send(newCharacter);
  };
  const getCharacter = (req, res) => {
    const { characterId } = req.params;
    const character = ramCharacter.find(({ id }) => id === +characterId);
    res.json(character);
  };
  const modifyCharacter = (req, res) => {
    const { characterId } = req.params;
    let character;
    // El método map nos va a sobrescribir el array de ramCharacter todo el tiempo
    ramCharacter = ramCharacter.map((currentCharacter) => {
      if (currentCharacter.id === +characterId) {
        character = {
          ...currentCharacter,
          ...req.body,
          modified: new Date(),
        };
        return character;
      }
      return currentCharacter;
    });
    res.json(character);
  };
  const deleteCharacter = (req, res) => {
    const { characterId } = req.params;
    ramCharacter = ramCharacter.filter((character) => character.id !== +characterId);
    res.status(204);
    res.json();
  };
  return {
    getAllCharacters,
    createCharacter,
    getCharacter,
    modifyCharacter,
    deleteCharacter,
  };
}

module.exports = controller();
