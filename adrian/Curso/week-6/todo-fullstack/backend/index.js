const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');

require('dotenv').config();
const morgan = require('morgan');

const server = express();
mongoose.connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

const port = 4000;
server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`)
);
