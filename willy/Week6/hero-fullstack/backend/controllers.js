
const Hero = require('./models/heroModel')

function heroesController() {
   
    const getAllHeroes = (req, res) => {
   
    };

    

    const createHeroes = async (req, res) => {
      const newHero = await Hero.create ({
        ...req.body, 
      });
      
      res.json(newHero);
    }

    const getById = async (req, res) => {
        const {heroId} = req.params;
         const hero = await Hero.findById(heroId)
         res.json(hero);
    };
    
    const updateHero = async (req, res) => {
        const {heroId} = req.params;
        const hero = await Hero.findByIdAndUpdate(heroId,
           {...req.body}, 
           {new:true}
           );

            res.json(hero)
         };

    const deleteHeroes = async (req, res) => {
        const {heroId} = req.params
        await Hero.findByIdAndDelete(heroId)
        res.status(204);
        res.json();
    };
    return {
      getAllHeroes,
      createHeroes,
      getById,
      updateHero,
      deleteHeroes,
    };
  }
  module.exports = heroesController();


