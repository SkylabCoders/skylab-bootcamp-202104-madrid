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

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const tasksRoutes = require('./routes/tasksRoutes');

app.use('/api/tasks', tasksRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => debug(`Server is running in ${chalk.blue(`http://localhost:${port}`)}`));
