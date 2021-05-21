const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
const todoRouter = require('./routes/todoRouter');
require('dotenv').config();

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();
const port = process.env.PORT || 4000;
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/tasks', todoRouter);

app.listen(port, () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`));
