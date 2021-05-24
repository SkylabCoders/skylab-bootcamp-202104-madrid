const { Router } = require('express');
const {
  getAll, create, updateById, deleteById
} = require('../controllers/skillsControllers');

function skillRouter() {
  const skillRoutes = Router();

  skillRoutes
    .route('/')
    .get(getAll)
    .post(create);

  skillRoutes
    .route('/:expId')
    .put(updateById)
    .delete(deleteById);

  return skillRoutes;
}
module.exports = skillRouter();
