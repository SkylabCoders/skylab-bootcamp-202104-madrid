const { Router } = require('express');
const {
  getAll, create, updateById, deleteById
} = require('../controllers/infoControllers');

function infoRouter() {
  const infoRoutes = Router();

  infoRoutes
    .route('/')
    .get(getAll)
    .post(create);

  infoRoutes
    .route('/:infoId')
    .put(updateById)
    .delete(deleteById);

  return infoRoutes;
}
module.exports = infoRouter();
