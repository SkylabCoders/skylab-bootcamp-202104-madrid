const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { connect } = require('mongoose');
const morgan = require('morgan');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => debug(`Server is running in ${chalk.green(`http://localhost:${port}`)}`));
