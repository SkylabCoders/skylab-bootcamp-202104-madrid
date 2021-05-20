/* eslint-disable no-console */
let ramCharacter = require('../constants/ramJSON.json');

function controller() {
  let maxCharacterId;
  (function getCharacterId() {
    const ramCharacterOrdered = ramCharacter.sort((characterA, characterB) => characterA.id - characterB.id);
    maxCharacterId = ramCharacterOrdered[ramCharacterOrdered.length - 1].id;
  }());

  const getAll = (req, res) => {
    res.json(ramCharacter);
  };
  const createHero = (req, res) => {
    maxCharacterId += 1;
    const newHero = {
      ...req.body,
      id: maxCharacterId,
    };
    ramCharacter.push(newHero);
    res.send(newHero);
  };
  const getHero = (req, res) => {
    const { heroId } = req.params;
    const hero = ramCharacter.find(({ id }) => id === +heroId);
    res.json(hero);
  };
  const modifyHero = (req, res) => {
    const { heroId } = req.params;
    let hero;
    // El método map nos va a sobrescribir el array de ramCharacter todo el tiempo
    ramCharacter = ramCharacter.map((currentHero) => {
      if (currentHero.id === +heroId) {
        hero = {
          ...currentHero,
          ...req.body,
          modified: new Date(),
        };
        return hero;
      }
      return currentHero;
    });
    res.json(hero);
  };
  const deleteHero = (req, res) => {
    const { heroId } = req.params;
    ramCharacter = ramCharacter.filter((hero) => hero.id !== +heroId);
    res.status(204);
    res.json();
  };
  return {
    getAll,
    createHero,
    getHero,
    modifyHero,
    deleteHero,
  };
}

module.exports = controller();
