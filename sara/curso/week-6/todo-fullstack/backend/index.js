const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();

app.use(cors());

const taskRouter = require('./routes/taskRouter');

app.use('/api/task', taskRouter);

app.use(morgan('dev'));

app.use(express.json());

const port = 4000;

app.listen(
  port,
  () => debug(`app is running on ${chalk.yellow(`http://localhost:${port}`)}`),
);
