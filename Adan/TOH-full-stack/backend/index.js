const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

require('dotenv').config();

mongoose.connect(process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }); // se conecta a la base de dato de atlas que hemos creado

const server = express();
server.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware
server.use(cors());
server.use(morgan('short'));
const heroRoutes = require('./routes/heroRouter');
const ramRoutes = require('./routes/ramRouter');

server.use('/api/heroes', heroRoutes);

server.use('/api/character', ramRoutes);

const port = 4000;
// eslint-disable-next-line no-console
server.listen(port, () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`));
