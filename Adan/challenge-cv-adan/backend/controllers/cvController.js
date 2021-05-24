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
  async function updateById(req, res) {
    try {
      const parameter = req.params.id;
      const dataToUpdate = req.body;
      const cv = await Cv.findByIdAndUpdate(
        parameter,
        dataToUpdate,
        { new: true }
      );
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
  async function deleteById(req, res) {
    try {
      await Cv.findByIdAndDelete(req.params.id);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAll,
    create,
    deleteById,
    updateById
  };
}

module.exports = cvController();
