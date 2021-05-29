const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.post('/home', (req, res) => {
  res.render('home', {
    name: req.body.name,
    surname: req.body.surname
  });
});
app.get('/forms', (req, res) => {
  res.render('forms');
});
app.listen(
  4000,
  () => console.log('Server is running on http://localhost:4000')
);
