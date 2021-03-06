let heroArr = require('./constantes/mockHero')

function heroesController() {
    let maxHeroId;
    (function getHeroI() {
      const heroesOrdered = heroArr.sort((heroA, heroB) => heroA.id - heroB.id);
      maxHeroId = heroesOrdered[heroesOrdered.length - 1].id;
    }());
    const getAllHeroes = (req, res) => {
      res.send(heroArr);
    };
    const createHeroes = (req, res) => {
      maxHeroId += 1;
      const newHero = {
        ...req.body,
        id: maxHeroId,
      };
      heroArr.push(newHero);
      res.send(newHero);
    };
    const getById = (req, res) => {
        const {heroId} = req.params;
         const hero = heroArr.find(({id}) => id === +heroId);
         res.json(hero);
    };
    const putOneHero = (req, res) => {
        const {heroId} = req.params;
        let hero;

        heroArr = heroArr.map((currentHero) => {
            if (currentHero.id === +heroId){
                hero = {
                    ...currentHero,
                    ...req.body,
                    modified: new Date()
                };
            
                return hero;
            };
        
        return currentHero;
        
        });
            res.json(hero)
         };

    const deleteHeroes = (req, res) => {
        const {heroId} = req.params
        heroArr = heroArr.filter((hero) => hero !== hero.id)
        res.status(204);
        res.json()
    };
    return {
      getAllHeroes,
      createHeroes,
      getById,
      putOneHero,
      deleteHeroes,
    };
  }
  module.exports = heroesController();

// let maxHeroId;
//  const getHeroId = () => { 
//     const heroOrdered = heroArr.sort((heroA, heroB) => heroA.id - heroB.id);
//     maxHeroId = heroOrdered[heroOrdered.length - 1].id
//   }

// module.exports = {
//     getHeroId: () => {
//          maxHeroId;
//         const heroOrdered = heroArr.sort((heroA, heroB) => heroA.id - heroB.id);
//         maxHeroId = heroOrdered[heroOrdered.length - 1].id
//     },
     
// getAll: (req, res) => {
//     res.json(heroArr);
// },
// post: (req, res) => {
//     this.maxHeroId += 1
//     const newHero = {...req.body, id: maxHeroId}
//     heroArr.push(newHero)
//     res.send(newHero)
    
    
// },

// getOneHero: (req, res) => {
//     res.send('get funciona con un heroe')
// },

// postOneHero: (req, res) => {
//     res.send('post funciona con un heroe')
// },

// deleteOneHero: (req, res) => {
//     res.send('delete funciona con un heroe')
// }

// }
