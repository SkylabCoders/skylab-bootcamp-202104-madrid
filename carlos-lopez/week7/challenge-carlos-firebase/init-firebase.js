const firebase = require('firebase')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const firebaseConfig = {
  apiKey: 'AIzaSyCv0m0D2xdqRtKGIDnOSM177S8OHho6xCQ',
  authDomain: 'challenge-login-express-js.firebaseapp.com',
  projectId: 'challenge-login-express-js',
  storageBucket: 'challenge-login-express-js.appspot.com',
  messagingSenderId: '363508471283',
  appId: '1:363508471283:web:55134182c2cd6e5b342e86'
}

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/home', (req, res) => {
  console.log(req.body)
  res.render('home', {
    name: req.body.name,
    surname: req.body.surname
  })
  console.log(firebase.initializeApp(firebaseConfig))

  firebase.auth().signInWithEmailAndPassword(req.body.name, req.body.surname)
    .then((userCredential) => {
    // Signed in
    console.log(userCredential)
      const user = userCredential.user
      console.log('Log in' + user)
      console.log('Esto es lo que buscas ' + userCredential.user + '*********')
    // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
})
// Your web app's Firebase configuration

// Initialize Firebase

app.listen(4000, () => console.log('Server is running in http://localhost:4000'))
