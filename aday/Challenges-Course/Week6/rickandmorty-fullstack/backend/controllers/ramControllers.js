const ram = require('../constants/ramMock');

function ramController() {
  const getAllCharacters = (req, res) => {
    res.send(ram);
  };

  return {
    getAllCharacters,
  };
}

module.exports = ramController();
