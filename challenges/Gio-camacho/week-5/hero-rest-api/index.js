// Importar express
const express = require('express');
// Crear el servidor
const server = express();

server.use(express.json());

const heroRouter = require('./routes/heroRouter');
const marvelRouter = require('./routes/marvelRouter');

server.use('/api/heroes', heroRouter);
server.use('/api/marvel', marvelRouter);

const port = 4002;
server.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
