const express = require('express');

const server = express();
server.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware
const heroRoutes = require('./routes/heroRouter');
const ramRoutes = require('./routes/ramRouter');

server.use('/api/heroes', heroRoutes);

server.use('/api/character', ramRoutes);


const port = 4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

