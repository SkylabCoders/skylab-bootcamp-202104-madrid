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
  return {
    getAll,
    createInfo,
    getCvById,
  };
}

module.exports = controller();
