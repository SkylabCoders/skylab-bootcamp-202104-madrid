const debug = require('debug')('app:cvController');
const Cv = require('../models/cvModel');

function controller() {
  const getAll = async (req, res) => {
    debug(req.query);
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
  const createInfo = async (req, res) => {
    const newInfo = await Cv.create({
      ...req.body,
    });
    res.json(newInfo);
  };

  const getCvById = async (req, res) => {
    const { cvId } = req.params;
    try {
      const user = await Cv.findById(cvId);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateById = async (req, res) => {
    const { cvId } = req.params;
    const dataToUpdate = req.body;
    try {
      const userUpdated = await Cv.findByIdAndUpdate(
        cvId,
        dataToUpdate,
        { new: true, useFindAndModify: false },
      );
      res.json(userUpdated);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteById = async (req, res) => {
    const { cvId } = req.params;
    try {
      await Cv.findByIdAndDelete(cvId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
  return {
    getAll,
    createInfo,
    getCvById,
    updateById,
    deleteById,
  };
}

module.exports = controller();
