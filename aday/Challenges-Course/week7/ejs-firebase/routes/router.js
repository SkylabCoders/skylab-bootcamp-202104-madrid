const express = require('express')
const firebase = require('firebase')
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-ejs-a5765-default-rtdb.europe-west1.firebasedatabase.app/'
});

const database = admin.database()

// const firebaseapp = require("firebase/app");
// const firebaseauth = require("firebase/auth");
// const firebasestore = require("firebase/firestore");

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

//   firebase
//   .auth()
//   .getUserByEmail(email)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });

function router() {
const routes = express.Router()

routes
.route('/')
.get((req, res) => {
    database.ref('user').once('value', (snapshot) => {
        const users = snapshot.val();
        console.log(users)
        res.render('main', { user: users} )
    })
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
    const { email, password } = req.body
    console.log(`${email} ${password}`)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const { user }  = userCredential
      // ...
      const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    database.ref('user').push(newUser)
    })
    .catch((error) => {
        console.log(error)
          const { errorCode } = error
          const { errorMessage } = error
    });
})

routes
.route('/home')
.post((req, res) => {
    const { email, password } = req.body
    console.log(`${email} ${password}`)
    firebase.auth().signInWithEmailAndPassword(email, password)
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

