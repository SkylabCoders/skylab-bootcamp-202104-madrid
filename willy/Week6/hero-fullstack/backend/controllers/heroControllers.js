const debug = require('debug')('server:heroController')
const { restart } = require('nodemon');
const Hero = require('../models/heroModel')

debug("Estas en heroController")

function heroesController() {
   
    const getAllHeroes = async (req, res) => {
    
      const query = {...req.query}
  try {

      const heroes = await Hero.find(query)
 
    res.json(heroes)
  } catch (error) {
    res.status(500);
    res.send(error)
  }
      
    };

    

    const createHeroes = async (req, res) => {
      try {

        const newHero = await Hero.create ({
          ...req.body, 
        });

        res.json(newHero);
      } catch (error) {
        res.status(500);
        res.send(error)
      }
      
    }

    const getById = async (req, res) => {

      try{

        const {heroId} = req.params;
         const hero = await Hero.findById(heroId)
         res.json(hero);
      } catch (error) {
        res.status(500);
        res.send(error)
      }
    };
    
    const updateHero = async (req, res) => {
        const {heroId} = req.params;
        try {
          const hero = await Hero.findByIdAndUpdate(heroId,
             {...req.body}, 
             {new:true}
             );
  
              res.json(hero)
        } catch (error) {
          res.status(500);
          res.send(error)
        }
         };

    const deleteHeroes = async (req, res) => {
      const {heroId} = req.params
      
      try {
        await Hero.findByIdAndDelete(heroId)
    
        res.json();
       } catch (error) {
        res.status(204);
        res.send(error)
    };
  }
    return {
      getAllHeroes,
      createHeroes,
      getById,
      updateHero,
      deleteHeroes,
    };
  }
  module.exports = heroesController();


