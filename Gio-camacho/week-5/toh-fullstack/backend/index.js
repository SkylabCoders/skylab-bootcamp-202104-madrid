// Importar express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('server');
const chalk = require('chalk');

require('dotenv').config();

mongoose.connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Crear el servidor
const server = express();

server.use(cors());

server.use(express.json());

const heroRouter = require('./routes/heroRouter');
const marvelRouter = require('./routes/marvelRouter');

server.use('/api/heroes', heroRouter);
server.use('/api/marvel', marvelRouter);

const port = 4002;
server.listen(port, () => debug(`Server is ${chalk.blue('running')} cool on port http://localhost:${port}`));
