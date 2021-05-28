const index = require('../index')
const express = require('express')

function router() {
const routes = express.Router()

routes
.route('/')
.get((req, res) => {
    res.render('main')
})

routes
.route('/form')
.get((req, res) => {
    res.render('form')
})

routes
.route('/home')
.post((req, res) => {
    const newUser = {
        name: req.body.name,
        password: req.body.password
    }
    index.database.ref('user').push(newUser)
    res.send('Has sido registrado correctamente!')
})

return routes
}

module.exports = router()