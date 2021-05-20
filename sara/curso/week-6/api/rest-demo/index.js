// que vamos a utilizar para crear el servidor
// con que vamos a escuchar eventos
const express = require('express');

// crear el servidor
const server = express();

// definir los mecanismos para escuchar peticiones(definir las rutas dentro del servidor)

const heroRoutes = require('./routes/heroRouter');

server.use('/api/heroes', heroRoutes);

// escuchar las peticiones
server.listen(4000, () => {
  console.log('server is running in localhost://4000');
});
