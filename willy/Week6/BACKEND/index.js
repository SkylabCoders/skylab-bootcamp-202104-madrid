const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const app = express();

// Esto se llama middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/', (req, res) => { res.send('funciona'); });

app.listen(5000, () => debug('Esto parece que funciona en el puerto 5000'));
