const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { connect } = require('mongoose');
const morgan = require('morgan');
const taksRouters = require('./routes/taksRouters');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;
app.use(cors());
app.use(morgan('dev'));

app.use('/api/tasks', taksRouters);

app.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
