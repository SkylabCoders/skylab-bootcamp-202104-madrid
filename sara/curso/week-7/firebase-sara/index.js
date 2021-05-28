const firebase = require ('firebase')
const express = require('express')

const firebaseConfig = {
    apiKey: "AIzaSyCxP5LEPF-7I_1mP5rJ9NF4JPDBdbo-iRs",
    authDomain: "sara-firebase-login.firebaseapp.com",
    projectId: "sara-firebase-login",
    storageBucket: "sara-firebase-login.appspot.com",
    messagingSenderId: "1007276652690",
    appId: "1:1007276652690:web:041b472af37ddb382bce4b"
  };

firebase.initializeApp(firebaseConfig);


const server = express();
server.use(express.urlencoded( {extended: false} ))
server.use(express.json());

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('login')
})

server.post('/home', (req, res) => {
    res.render('home', {
        name : req.body.name, 
        surname: req.body.surname
    })
    firebase.auth().signInWithEmailAndPassword(req.body.name, req.body.surname)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
})



server.listen(4000)