const Info = require('../model/infoModel');

function controllerInfo() {
  async function getAll(res, req) {
    try {
      const info = await Info.find(req.query);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(res, req) {
    try {
      const info = await Info.create(req.body);
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(res, req) {
    try {
      const info = await Info.findByIdAndUpdate(
        req.params.infoId,
        req.body,
        { new: true }
      );
      res.json(info);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Info.findByIdAndDelete(req.params.infoId);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAll, create, updateById, deleteById
  };
}

module.exports = controllerInfo();
