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

  async function create(req, res) {
    try {
      const cv = await Cv.create(req.body);
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  return {
    getAll,
    create
  };
}

module.exports = cvController();
