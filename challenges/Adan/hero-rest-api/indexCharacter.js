const express = require('express');

const server = express();
server.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware

const ramRoutes = require('./routes/ramRouter');

server.use('/api/character', ramRoutes);

const port = 5000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
