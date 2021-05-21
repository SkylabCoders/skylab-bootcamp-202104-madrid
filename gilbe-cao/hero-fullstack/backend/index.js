const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const server = express();

server.use(cors());

server.use(express.json());

const heroRouter = require('./routes/heroRouter');

server.use('/api/heroes', heroRouter());

const port = 4000;
server.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}`),
);