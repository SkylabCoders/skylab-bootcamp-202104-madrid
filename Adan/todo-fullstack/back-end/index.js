const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const chalk = require('chalk');
const debug = require('debug')('app');

const morgan = require('morgan');

require('dotenv').config();

connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

const app = express();
app.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware
app.use(cors());
app.use(morgan('dev'));
const taskRoutes = require('./routes/taskRouter');

app.use('/api/tasks', taskRoutes);

const port = 5000;
app.listen(port, () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`));
