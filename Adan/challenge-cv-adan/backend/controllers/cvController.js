const debug = require('debug');
const Cv = require('../models/cvModel');

function cvController() {
  async function getAll(req, res) {
    try {
      const cv = await Cv.find(req.query);
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  return {
    getAll
  };
}

module.exports = cvController();
