const express = require('express')
const debug = require('debug')('server')
const cors = require('cors')
const admin = require('firebase-admin')


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://challenge-serversiderendering-default-rtdb.firebaseio.com/'
})


const dataBase = admin.database()

const server = express()

server.use(express.urlencoded({extended:false}))
server.use(express.json())

server.set('view engine', 'ejs')


server.get('/', (req, res) => {
    res.render('index')
})

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/form', (req, res) => {
    res.render('form')
})


/* Ejemplo hecho en clase para pintar
 
 server.post('/home', (req, res) => {
     const {name, surname} = req.body
     res.render('home', {
         name,
         surname
     })
     dataBase.ref('user').push(req.body) 
 })
 */

 server.post('/home', (req, res) => {
    
    const newUser = {
        name: req.body.name,
        surname: req.body.surname
    }
   
    dataBase.ref('user').push(newUser) 
    res.send('Registered!')
 })

const port = 4000

server.listen(port, () => debug(`server is running in port ${port}`) )