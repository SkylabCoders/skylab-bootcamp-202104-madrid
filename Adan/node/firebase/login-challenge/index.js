const firebase = require('firebase');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const firebaseConfig = {
  apiKey: 'AIzaSyClJ78pbBDCDA-BDKuXUfG6YsIFwJP4mWY',
  authDomain: 'fir-login-24f30.firebaseapp.com',
  projectId: 'fir-login-24f30',
  storageBucket: 'fir-login-24f30.appspot.com',
  messagingSenderId: '797968168007',
  appId: '1:797968168007:web:f43c563519069dcd746d62'
};
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
// app.get('/home', (req, res) => {
//   res.render('home');
// });
app.post('/home', (req, res) => {
  res.render('home', {
    email: req.body.email,
    password: req.body.password
  });

  firebase.initializeApp(firebaseConfig);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((userCredential) => {
      console.log(userCredential);
      const { user } = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error.code);
      const errorMessage = error.message;
    });
});
app.listen(
  4000,
  () => console.log('Server is running on http://localhost:4000')
);
