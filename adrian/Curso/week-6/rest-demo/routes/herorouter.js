const route = require('color-convert/route');
const {Router} = require('express');
const controller = require('../controllers/heroControllers')
const marvelController = require('../controllers/marvelController')
function heroRouter (){
    const heroRoutes = Router();


    
    heroRoutes
    .route('/')
    .get(controller.getAll)
    .post(controller.post);

    heroRoutes
    .route('/:heroId')
    .get(controller.getById)
    .put(controller.put)
    .delete(controller.delete);

    heroRoutes
    .route('/marvel/character')
    .get(marvelController.getAll)

    return heroRoutes
}

module.exports = heroRouter()



























// const express = require('express');
// const heroes = require('../constantes/heroMock')

// const heroRoutes = express.Router();

// function heroRouter(){
    
// }
// heroRoutes
//     .route('/')
//     .get((req, res)=>{
//     res.send(heroes)
//     })


// heroRoutes
//     .route('/:heroId')
//     .get((req, res)=>{
//         const hero = heroes.find(currentHero => currentHero.id === +req.params.heroId)
//         if(hero){
//             res.send(hero)
//         }else{
//             res.status(404)
//             res.send('no se encuentra el heroe')
//         }
//     })