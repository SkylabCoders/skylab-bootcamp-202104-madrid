const {
  getAll,
  getUserData,
  createUserCV,
  updateUserCV,
} = require('./cvController');

const User = require('../models/cvModel');

jest.mock('../models/cvModel');
