const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();

const { connect } = require('mongoose');

connect(
  process.env.DDB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();

const tasks = [
  {
    responsable: 'Aday',
    description: 'Comprar entradas NBA',
  },
];

// definir las rutas dentro del servidor

app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

app.get('/api/tasks/:taskId', (req, res) => {
  res.send();
});

//

const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use('/api/tasks', tasksRoutes);

app.listen(port, () => debug(`Server is running in ${chalk.blue(`http://localhost:${port}`)}`));
