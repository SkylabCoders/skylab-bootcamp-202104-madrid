let Ricks = require('../constantes/rickMock');

let maxRickId;

(function getHeroId() {
  const ricksOrdered = Ricks.sort((heroA, heroB) => heroA.id - heroB.id);
  maxRickId = ricksOrdered[ricksOrdered.length - 1].id;
}());

module.exports = {
  getAllRicks: (req, res) => {
    res.json(Ricks);
  },
  getById: (req, res) => {
    const { rickId } = req.params;
    const rick = Ricks.find(({ id }) => id === +rickId);
    if (rick) {
      res.json(rick);
    } else {
      res.status(404);
      res.send('no encontré el rick');
    }
  },
  postRick: (req, res) => {
    maxRickId += 1;
    const newRick = {
      id: maxRickId,
      ...req.body,
    };
    Ricks.push(newRick);
    res.send(newRick);
  },
  putRick: (req, res) => {
    const { rickId } = req.params;
    let rick;
    Ricks = Ricks.map((currentRick) => {
      if (currentRick.id === +rickId) {
        rick = {
          ...currentRick,
          ...req.body,
        };
        return rick;
      }
      return currentRick;
    });
    res.json(rick);
  },

  deletRick: (req, res) => {
    const { rickId } = req.params;
    Ricks = Ricks.filter((element) => element.id !== +rickId);
    res.status(204);
    res.json(rickId);
  },
};
