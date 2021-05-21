/* eslint-disable no-console */
// importar express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const heroRouter = require('./routes/heroRouter');
const ramRouter = require('./routes/ramRouter');

// crear el servidor
const server = express();
server.use(express.json());
server.use(cors());

// Definir una ruta raíz

server.use('/api/heroes', heroRouter);
server.use('/api/ram', ramRouter);

// Escuchar en un puerto ....4000
const port = 4000;
server.listen(port, () => console.log(`Server is runnning in http://localhost:${port}`));
