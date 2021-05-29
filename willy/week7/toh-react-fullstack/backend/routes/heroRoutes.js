const {Router} = require('express')

function heroRouter () {
    const heroRoutes = Router()

    heroRoutes
    .route('/')
    .get()
    .post()

    heroRoutes
    .route('/:heroId')
    .get()
    .put()
    .delete()
}

module.exports = heroRoutes();