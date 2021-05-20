// Con qué creamos el servidor
const express = require('express');

// Crear el servidor
const server = express();

// Definir las rutas
const heroRoutes = require('./routes/heroRouter')();

server.use('/api/heroes', heroRoutes);

// Escuchar las peticiones
server.listen(4000, () => console.log('Server is running in http://localhost:4000'));
