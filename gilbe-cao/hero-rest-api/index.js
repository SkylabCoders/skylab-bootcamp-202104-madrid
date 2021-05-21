const express = require('express');

const server = express();

server.use(express.json());

const heroRouter = require('./routes/heroRouter');

server.use('/api/heroes', heroRouter());

const port = 4000;
server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`),
);
