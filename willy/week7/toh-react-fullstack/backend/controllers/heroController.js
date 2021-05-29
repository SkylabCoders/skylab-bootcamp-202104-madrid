const Hero = require('./../models/heroModel')

function heroController() {

    async function getAllHeroes(req, res) {
        try {
            const heroes = await Hero.find(req.query)
            res.json(heroes)
        } catch(error) {
            res.status(500)
            res.send(error)
        }
    }

    async function createHero (req, res) {
        try {
            const heroe = await Hero.create(req.body)
            res.json(heroe)
        } catch(error) {
            res.status(500)
            res.send(error)
    }

    async function getById (req, res) {
        try {
            const heroe = await Hero.findById(req.params.heroId)
            res.json(hero);
        } catch (error) {
          res.status(500);
          res.send(error)
        }
    }

    async function updateById (req, res) {
        try {
            const heroe = await Hero.findByIdAndUpdate(
                req.params.heroId,
                req.body,
                {new: true}
                )
            res.json(hero);
            
        } catch (error) {
          res.status(500);
          res.send(error)
        }

    async function deleteById (req, res) {
        try {
            await Hero.findByIdAndDelete(req.params.heroId)
            res.status(204);

        }  catch (error) {
            res.status(500);
            res.send(error)
          }
    }

    return {
        getAllHeroes, 
        getById,
        createHero,
        updateById,
        deleteById
    }
}

module.exports = heroController()
    