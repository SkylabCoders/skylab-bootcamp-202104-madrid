const { Router } = require('express')

const controller = require('./../controllers')

function heroRouter() {
    const heroRoutes = Router()

    heroRoutes
    .route('/')
    .get(controller.getAllHeroes)
    .post(controller.createHeroes)

    heroRoutes
    .route('/:heroId')
    .get(controller.getById)
    .post(controller.postOneHero)
    .delete(controller.deleteHeroes)

    return heroRoutes
}

module.exports = heroRouter();