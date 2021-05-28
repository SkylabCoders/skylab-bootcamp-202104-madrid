const express = require('express');

const server = express();

server.use(express.urlencoded({ extended: false }));

server.use(express.json());

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.get('/form', (req, res) => {
  res.render('form');
});

server.post('/home', (req, res) => {
  res.render('home', {
    name: req.body.name,
    surname: req.body.surname,
  });
});

server.listen(4000);
