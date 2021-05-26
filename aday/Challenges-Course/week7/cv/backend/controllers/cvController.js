const chalk = require('chalk');
const debug = require('debug')('server:heroesController');
const Cv = require('../models/cvModel');

function controller() {
  const getAllCvs = async (req, res) => {
    debug(`Esto es ${chalk.yellow('getAllCvs')}`);

    try {
      const cv = await Cv.find(req.query);
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createCv = async (req, res) => {
    try {
      const newCv = await Cv.create(req.body);
      res.json(newCv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getByDni = async (req, res) => {
    try {
      const cv = await Cv.findOne(req.params);
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateCv = async (req, res) => {
    try {
      const cv = await Cv.findOneAndUpdate(
        req.params.dni,
        req.body,
        { new: true, useFindAndModify: false },
      );
      res.json(cv);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteCv = async (req, res) => {
    try {
      await Cv.findOneAndDelete(req.params.dni);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getAllCvs,
    createCv,
    getByDni,
    updateCv,
    deleteCv,
  };
}

module.exports = controller();
