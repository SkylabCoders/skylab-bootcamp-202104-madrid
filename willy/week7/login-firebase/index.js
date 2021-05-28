const express = require('express')
const debug = require('debug')('server')
const cors = require('cors')
const firebase = require('firebase')


const firebaseConfig = {
    apiKey: "AIzaSyC6eh2azv_2RQyoPMb-2-G96k1wncAWALA",
    authDomain: "challenge-serversiderendering.firebaseapp.com",
    databaseURL: "https://challenge-serversiderendering-default-rtdb.firebaseio.com",
    projectId: "challenge-serversiderendering",
    storageBucket: "challenge-serversiderendering.appspot.com",
    messagingSenderId: "388668868900",
    appId: "1:388668868900:web:69bc99f3c5eae191f98bb1"
  };

const server = express()

server.use(express.urlencoded({extended:false}))
server.use(express.json())

server.set('view engine', 'ejs')


server.get('/form', (req, res) => {
    res.render('form')
})


 server.post('/home', (req, res) => {
    const {email, password} = req.body;
    res.render('home', {
        email,
        password
    })
    firebase.initializeApp(firebaseConfig)
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((userCredential) => {
        const {user} = userCredential
    })
    .catch((error) => {
        const errorCode = error.code 
        const errorMessage = error.message
    })
 })

const port = 4000

server.listen(port, () => console.log(`server is running in port ${port}`) )