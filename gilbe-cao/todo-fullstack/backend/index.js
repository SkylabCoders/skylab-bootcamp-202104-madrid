const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();

const { connect } = require('mongoose');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`),
);
