const { Router } = require('express');
const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/contactMe');

function contactMeRouter() {
  const contactMeRoutes = Router();

  contactMeRoutes
    .route('/')
    .get(getAll)
    .post(create);

  contactMeRoutes
    .route('/:contactId')
    .put(updateById)
    .delete(deleteById);
  return contactMeRoutes;
}

module.exports = contactMeRouter();
