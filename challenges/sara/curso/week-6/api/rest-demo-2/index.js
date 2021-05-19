const express = require('express');

const server = express();

server.use(express.json());

const heroRouter = require('./routes/heroRoutes');

server.use('/api/heroes', heroRouter);

const port = 4000;

server.listen(port, () => console.log(`server is running on http://localhost:${port}`));
