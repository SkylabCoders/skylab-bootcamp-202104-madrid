const express = require('express');
const heroes = require('../constantes/heroMock')
const heroRoutes = express.Router();

heroRoutes
    .route('/')
    .get((req, res)=>{
    res.send(heroes)
    })


heroRoutes
    .route('/:heroId')
    .get((req, res)=>{
        const hero = heroes.find(currentHero => currentHero.id === +req.params.heroId)
        if(hero){
            res.send(hero)
        }else{
            res.status(404)
            res.send('no se encuentra el heroe')
        }
    })