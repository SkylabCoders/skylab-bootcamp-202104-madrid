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
const cvRouter = require('./routes/cvRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/cv', cvRouter);

const port = 4000;
app.listen(port, () => debug(`Server is runnning in http://localhost:${port}`));
