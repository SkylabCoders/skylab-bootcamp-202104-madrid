const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('app');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const routes = require('./routes/cvRoutes');

server.use('/api/cv', routes);

const port = process.env.PORT || 4000;

server.listen(port, () => debug(`Server is running in ${chalk.blue(`http://localhost:${port}`)}`));
