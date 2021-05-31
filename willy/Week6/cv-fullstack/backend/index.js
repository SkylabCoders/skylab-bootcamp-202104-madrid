const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { connect } = require('mongoose');
const morgan = require('morgan');
const infoRoutes = require('./routes/infoRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const aboutMeRoutes = require('./routes/aboutMeRoutes');
const skillRoutes = require('./routes/skillsRoutes');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/info', infoRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/about', aboutMeRoutes);
app.use('/api/skills', skillRoutes);

app.listen(port, () => debug(`Server is running in ${chalk.green(`http://localhost:${port}`)}`));
