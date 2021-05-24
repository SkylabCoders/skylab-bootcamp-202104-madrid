const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const moongose = require('mongoose');
const morgan = require('morgan');
const cvRoutes = require('./backend/router/cvRoutes');

moongose.connect(process.env.DDBB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );

const app = express();
const port = 4000
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/cvAdan', cvRoutes);

app.listen(
    port, 
    () => debug(`Server is running on ${chalk.bgGreenBright(`http://localhost:${port}`)}`)
)