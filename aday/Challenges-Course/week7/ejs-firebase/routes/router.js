const index = require('../index')
const express = require('express')

const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAcm0o6IwR8N7WJ2BqdvOLPJ200cZPf8ZI",
    authDomain: "fir-ejs-a5765.firebaseapp.com",
    databaseURL: "https://fir-ejs-a5765-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-ejs-a5765",
    storageBucket: "fir-ejs-a5765.appspot.com",
    messagingSenderId: "674455607548",
    appId: "1:674455607548:web:4f87f4f43d8923e8cb9f79"
  };
  
  firebase.initializeApp(firebaseConfig);

function router() {
const routes = express.Router()

routes
.route('/')
.get((req, res) => {
    res.render('main')
})

routes
.route('/register')
.get((req, res) => {
    res.render('register')
})

routes
.route('/login')
.get((req, res) => {
    res.render('login')
})

routes
.route('/welcome')
.post((req, res) => {
    const newUser = {
        name: req.body.name,
        password: req.body.password
    }
    index.database.ref('user').push(newUser)
    res.send('Has sido registrado correctamente!')
})

routes
.route('/home')
.post((req, res) => {
    const { username, password } = req.body
 
     res.send('Te has logueado correctamente')

      firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
        // Signed in
          const { user }  = userCredential
        // ...
        })
        .catch((error) => {
            console.log(error)
          const { errorCode } = error
          const { errorMessage } = error
        })
})

return routes
}

module.exports = router()

