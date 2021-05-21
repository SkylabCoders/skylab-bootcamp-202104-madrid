/**
 * GIVEN
 * THEN
 * AND
 * OR 
 * THEN...
 */

const {getAllHeroes} = require('./heroControllers')
let Hero = require('../models/heroModel')


jest.mock('../models/heroModel')

describe('heroController', () =>{
    describe('Given a getAllHeroes function', () => {
        describe('When is invoked', () => {
            let req;
            let res;
            
            beforeEach( async () => {
                 req = {
                    query: null,
                };
                
                res = {
                   json: jest.fn(),
               };

              

                await getAllHeroes(req, res)
            });

            test('Then call res.json once', () => {
                expect(res.json).toHaveBeenCalled()
            });

            test('Then call res.json with and array of 2 objects', () =>{
                expect(true).toBe(false)
            });

            test.only('Then call Hero.find', () =>{
                expect(Hero.find).toHaveBeenCalled()
            });

            describe('And there is an error', () => {
                test('Then call res.status with 500', () => {
                    expect(true).toBe(false)
                })
            })
        })
    })
   
})