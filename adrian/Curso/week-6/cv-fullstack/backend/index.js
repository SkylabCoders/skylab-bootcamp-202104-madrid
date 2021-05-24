const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const debug = require('debug')('app');
const cors = require('cors');
const chalk = require('chalk');
const cvRoutes = require('./routes/cvRoutes');

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const server = express();
server.use(cors());
server.use(morgan('dev'));
server.use(express.json);

server.use('/api/cv', cvRoutes);

server.listen(
  4000,
  () => debug(`server is running on ${chalk.yellow('localhos://4000')}`)
);
