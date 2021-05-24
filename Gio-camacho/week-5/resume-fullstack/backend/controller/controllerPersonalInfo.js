const ContactMe = require('../models/contactMe');

function contactMe() {
  async function getAll(req, res) {
    try {
      const contact = await ContactMe.find(req.query);
      res.json(contact);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function create(req, res) {
    try {
      const contact = await ContactMe.create(req.body);
      res.json(contact);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const contact = await ContactMe.findByIdAndUpdate(
        req.params.infoId,
        req.body,
        { new: true, useFindAndModify: false }
      );

      res.json(contact);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await ContactMe.findByIdAndDelete(req.params.infoId);
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
    updateById,
    deleteById
  };
}

module.exports = contactMe();
