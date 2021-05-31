const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cvRouter = require('./routes/cdRouter');
require('dotenv').config();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/cv', cvRouter);

app.listen(port, () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`));
