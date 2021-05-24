const { Router } = require('express');
const {
  getAll, create, updateById, deleteById
} = require('../controllers/aboutMe');

function aboutMeRouter() {
  const infoRoutes = Router();

  infoRoutes
    .route('/')
    .get(getAll)
    .post(create);

  infoRoutes
    .route('/:aboutMeId')
    .put(updateById)
    .delete(deleteById);

  return infoRoutes;
}
module.exports = aboutMeRouter();
