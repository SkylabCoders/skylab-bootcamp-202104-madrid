const express = require('express');

const server = express();
server.use(express.json()); // indicarle al server que debe esperar un json, 'use' metodo middleware

const heroRoutes = require('./routes/heroRouter');

server.use('/api/heroes', heroRoutes);

const port = 4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
