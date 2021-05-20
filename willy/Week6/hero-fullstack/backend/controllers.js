let heroArr = require('./constantes/mockHero')
const Hero = require('./models/heroModel')

function heroesController() {
   
    const getAllHeroes = (req, res) => {
      if (req.query.name) {
        return res.json(heroArr.filter(({name}) => name.toLocaleLowerCase().includes(req.query.name.toLocaleLowerCase())))
      }
      return res.json(heroArr);
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

    const deleteHeroes = (req, res) => {
        const {heroId} = req.params
        heroArr = heroArr.filter(({id}) => id !== +heroId)
        res.status(204);
        res.json()
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

/*let maxHeroId;
 const getHeroId = () => { 
    const heroOrdered = heroArr.sort((heroA, heroB) => heroA.id - heroB.id);
    maxHeroId = heroOrdered[heroOrdered.length - 1].id
  }

module.exports = {
    getHeroId: () => {
         maxHeroId;
        const heroOrdered = heroArr.sort((heroA, heroB) => heroA.id - heroB.id);
        maxHeroId = heroOrdered[heroOrdered.length - 1].id
    },
     
getAll: (req, res) => {
    res.json(heroArr);
},
post: (req, res) => {
    this.maxHeroId += 1
    const newHero = {...req.body, id: maxHeroId}
    heroArr.push(newHero)
    res.send(newHero)
    
    
},

getOneHero: (req, res) => {
    res.send('get funciona con un heroe')
},

postOneHero: (req, res) => {
    res.send('post funciona con un heroe')
},

deleteOneHero: (req, res) => {
    res.send('delete funciona con un heroe')
}

}*/
