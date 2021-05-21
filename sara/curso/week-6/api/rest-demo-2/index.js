const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('server');
require('dotenv').config();

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const server = express();

server.use(cors());

server.use(express.json());

const heroRouter = require('./routes/heroRoutes');
const rickRouter = require('./routes/rickRoutes');

server.use('/', heroRouter);
server.use('/', rickRouter);

const port = 4000;

server.listen(port, () => debug(`server is running on http://localhost:${port}`));
