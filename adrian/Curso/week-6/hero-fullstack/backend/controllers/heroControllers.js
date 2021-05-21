const debug = require('debug')('app:heroController')
const Hero = require('../models/heroModels')
let heros = require('../constantes/heroMock')
let maxheroId;
(function getHeroId(){
    const heroesOrdered = heros.sort((heroA, heroB)=> heroA.id - heroB.id);
    maxheroId = heroesOrdered[heroesOrdered.length - 1].id;
})()

module.exports = {
    getAll: async (req, res)=>{
        debug('esto es getAll')
        try {
            const hero = await Hero.find(req.query)
            res.json(hero);
        }catch (error){
            res.status(500);
            res.send(error)
        }
    },

    create: (req, res)=>{
        try{const newHero = new Hero({
            ...req.body,
        })
        newHero.save();
         res.send(newHero)
        }catch (error){
            res.status(500);
            res.send(error)
        }
    },

    getById: async (req, res)=>{
        try{
            const { heroId } = req.params;
            const hero = await Hero.findById(heroId)
            res.json(hero)
        }catch (error){
            res.status(500);
            res.send(error)
        }
    },

    put: async (req, res)=>{
        const { heroId } = req.params;  
        let hero = await Hero.findByIdAndUpdate(heroId, {...req.body},  {new: true})
        res.json(hero)
    },

    delete: async (req, res)=>{
        const { heroId } = req.params;
        const heroDeleted = await Hero.findByIdAndDelete(heroId)
        res.json(heroDeleted)
    },
}