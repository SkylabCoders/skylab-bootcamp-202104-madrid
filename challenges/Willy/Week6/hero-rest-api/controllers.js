const heroArr = require('./constantes/mockHero')

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
      res.send(heroArr.find((hero) => hero.id === +req.params.heroId));
    };
    const postOneHero = (req, res) => {
            res.send('post funciona con un heroe')
         };

    const deleteHeroes = (req, res) => {
      res.send(`Se ha eliminado el héroe ${req.params.heroId}`);
    };
    return {
      getAllHeroes,
      createHeroes,
      getById,
      postOneHero,
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
