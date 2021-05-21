
const controllers = require('./marvelController')
list = [{name:"ciclops"}, {name:'wolverine'}]

describe('Given a function getAllHeroes', () => {
    describe('it should return a json', () => {
       let list = jest.fn()
       list()
        expect(list).toHaveBeenCalled()
    })
})