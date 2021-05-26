const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const cvRoutes = require('./routers/cvRouter');

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const server = express();
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/cv', cvRoutes);

server.listen(
  4000,
  () => debug(`Server is running on ${chalk.yellow('localhost://4000')}`),
);
