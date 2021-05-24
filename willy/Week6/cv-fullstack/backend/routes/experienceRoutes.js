const { Router } = require('express');
const {
  getAll, create, updateById, deleteById
} = require('../controllers/experienceController');

function experienceRouter() {
  const experienceRoutes = Router();

  experienceRoutes
    .route('/')
    .get(getAll)
    .post(create);

  experienceRoutes
    .route('/:expId')
    .put(updateById)
    .delete(deleteById);

  return experienceRoutes;
}
module.exports = experienceRouter();
