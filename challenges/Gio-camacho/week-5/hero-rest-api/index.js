// Importar express
const express = require('express');
// Crear el servidor
const server = express();

server.use(express.json());

const marvelRouter = require('./routes/marvelRouter');

server.use('/api/marvel/results', marvelRouter);

// Escuchar en un puerto ... 4000
const port = 4005;
server.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
