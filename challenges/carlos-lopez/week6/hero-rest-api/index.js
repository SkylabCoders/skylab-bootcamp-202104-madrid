/* eslint-disable no-console */
// importar express
const express = require('express');
const heroRouter = require('./routes/heroRouter');

// crear el servidor
const server = express();

// Definir una ruta raíz

server.use('/api/heroes', heroRouter);

// Escuchar en un puerto ....4000
const port = 4000;
server.listen(port, () => console.log(`Server is runnning in http://localhost:${port}`));
