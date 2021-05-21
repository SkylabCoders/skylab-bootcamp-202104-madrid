const {getAllHeroes} = require('./marvelController')

describe('marvelController', () => {
    describe('Given a function getAllHeroes', () => {
        describe('When is invoked', () => {
            let res;
            
            beforeEach(async () => {
                res = {
                    json: jest.fn()
                };

               await getAllHeroes(res)
            })

            test('Then call res.json once', () => {
                expect(res.json).toHaveBeenCalled()
            });
        })
    } )
})