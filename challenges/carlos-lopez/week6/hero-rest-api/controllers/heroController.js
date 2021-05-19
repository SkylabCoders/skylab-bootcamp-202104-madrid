const heroes = require('../constants/heroesJSON');

function controller() {
  const getAll = (req, res) => {
    res.json(heroes);
  };
  const post = (req, res) => {
    res.send('Post funciona');
  };
  const getHero = (req, res) => {
    res.send('get herofunciona');
  };
  const modifyHero = (req, res) => {
    res.send(' Puthero funciona');
  };
  const deleteHero = (req, res) => {
    res.send(' Delete funciona');
  };
  return {
    getAll,
    post,
    getHero,
    modifyHero,
    deleteHero,
  };
}

module.exports = controller();
