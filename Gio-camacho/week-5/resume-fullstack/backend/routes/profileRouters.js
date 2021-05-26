const { Router } = require('express');
const {
  getAll,
  create,
  updateById,
  deleteById
} = require('../controller/profile');

function profileRouter() {
  const profileRoutes = Router();

  profileRoutes
    .route('/')
    .get(getAll)
    .post(create);

  profileRoutes
    .route('/:profileId')
    .put(updateById)
    .delete(deleteById);
  return profileRoutes;
}

module.exports = profileRouter();
