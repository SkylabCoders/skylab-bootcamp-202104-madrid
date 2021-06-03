const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => debug(
  `${chalk.blue('Server')} is ${chalk.magenta('is runnin')} on port ${chalk.cyanBright(`http://localhost:${PORT}`)}`,
));
