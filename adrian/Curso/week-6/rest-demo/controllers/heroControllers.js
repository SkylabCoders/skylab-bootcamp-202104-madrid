
let heros = require('../constantes/heroMock')
let maxheroId;
(function getHeroId(){
    const heroesOrdered = heros.sort((heroA, heroB)=> heroA.id - heroB.id);
    maxheroId = heroesOrdered[heroesOrdered.length - 1].id;
})()
module.exports = {
    getAll: (req, res)=>{
        res.json(heros)
    },
    post: (req, res)=>{
        maxheroId += 1
        const nuevoHeroe = {
            ...req.body,
            id: maxheroId
        }
        heros.push(nuevoHeroe)
         res.send(nuevoHeroe)
    },
    getById: (req, res)=>{
        const { heroId } = req.params;
        const hero = heros.find(({ id }) => id === +heroId);
        res.json(hero)
    },
    put: (req, res)=>{
        const { heroId } = req.params;
        let hero;
        heros = heros.map((currentHero)=>{
            if(currentHero === +hero.id){
                hero = {
                    ...currentHero,
                    ...req.body,
                    modified: new Date(),
                };
                return hero
            }
            return currentHero;
        });
        res.json(hero);
    },
    delete: (req, res)=>{
        heros = heros.filter(hero => hero.id !== +req.params.heroId)
        res.json(heros)
    },
}