const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();

const { connect } = require('mongoose');
const morgan = require('morgan');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

const port = 4000;
server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`)
);
