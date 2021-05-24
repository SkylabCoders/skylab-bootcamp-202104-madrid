const debug = require('debug')('app:cvController');
const Cv = require('../models/cvModel');

function controller() {
  const getAll = async (req, res) => {
    const query = { ...req.query };
    try {
      const cv = await Cv.find(query);
      debug(cv);
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
}
