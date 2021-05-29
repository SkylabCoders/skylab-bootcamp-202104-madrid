const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyC3b9v4ZlLGK1kbrjusX4wpRuiJ9yKO_wI',
  authDomain: 'renso-firebase.firebaseapp.com',
  projectId: 'renso-firebase',
  storageBucket: 'renso-firebase.appspot.com',
  messagingSenderId: '978510373255',
  appId: '1:978510373255:web:e60147f01cab7e37e1b322',
};

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/form', (req, res) => {
  res.render('form', {
    title: 'Formulario',
    action: '/home',
    method: 'POST',
    submit: 'Enviar',
    fields:
      { name: 'Name', surname: 'Surname' },
  });
});

/* Example.
app.post('/home', (req, res) => {
  const { name, surname } = req.body;
  res.render('home', {
    name, surname,
  });
});
*/

app.post('/home', (req, res) => {
  const { name, surname } = req.body;
  res.render('home', {
    name, surname,
  });

  firebase.initializeApp(firebaseConfig);

  firebase.auth().signInWithEmailAndPassword(req.body.name, req.body.surname)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const { user } = userCredential;
      console.log(`Log in${user}`);
      console.log(`Esto es lo que buscas ${userCredential.user}*********`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
});

app.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`),
);
