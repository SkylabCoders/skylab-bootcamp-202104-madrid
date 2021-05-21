const express = require('express');
const { connect } = require('mongoose');
const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug');
require('dotenv').config();
const morgan = require('morgan');

const app = express();

connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

app.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware
app.use(cors());
app.use(morgan('dev'));

const port = 5000;
app.listen(port, () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`));
