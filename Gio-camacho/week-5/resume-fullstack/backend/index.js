const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const morgan = require('morgan');
const contactMe = require('./routes/contactMeRouters');
const profile = require('./routes/profileRouters');
const aboutMe = require('./routes/aboutRouters');
const skills = require('./routes/skillsRouters');
const experience = require('./routes/experiencesRouters');
require('dotenv').config();

mongoose.connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;
app.use(cors());
app.use(morgan('dev'));

app.use('/api/contact', contactMe);
app.use('/api/profile', profile);
app.use('/api/about', aboutMe);
app.use('/api/skills', skills);
app.use('/api/experiences', experience);

app.listen(
  port,
  () => debug(
    `${chalk.blue('Server')} is ${chalk.green('running')} on port: ${chalk.magenta(`http://localhost:${port}`)}`
  )
);
