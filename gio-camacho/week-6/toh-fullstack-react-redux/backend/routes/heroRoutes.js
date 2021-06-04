const { Router } = require('express');
const {
  getAll, create, updateById, deleteById,
} = require('../contrellers/heroController');

function heroRouter() {
  const heroRoutes = Router();

  heroRoutes
    .route('/')
    .get(getAll)
    .post(create);

  heroRoutes
    .route('/:heroId')
    .put(updateById)
    .delete(deleteById);

  return heroRoutes;
}

module.exports = heroRouter();
