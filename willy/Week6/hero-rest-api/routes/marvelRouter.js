const { Router } = require('express')
const controller = require('../controllers/marvelController')

function marvelRouter() {
    const marvelRoutes = Router()

    marvelRoutes
    .route('/')
    .get(controller.getAllHeroes)
    
    return marvelRoutes
}

module.exports = marvelRouter();