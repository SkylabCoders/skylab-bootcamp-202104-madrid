const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extend: true }));
app.use('/');

app.listen(5000, () => debug('Esto parece que funciona en el puerto 5000'));
