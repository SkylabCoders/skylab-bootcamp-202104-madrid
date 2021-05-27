const express = require('express')
const debug = require('debug')('server')
const cors = require('cors')

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

server.post('/home', (req, res) => {
    const {name, surname} = req.body
    res.render('home', {
        name,
        surname
    })
   
})
const port = 4000

server.listen(port, () => debug(`server is running in port ${port}`) )