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
            describe('And there is no error', () =>{
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
   
               test('Then call Hero.find', () =>{
                   expect(Hero.find).toHaveBeenCalled()
               });
            })
           

            describe('And there is an error', () => {
                beforeEach( async () => {
                    req = {
                        query: null,
                    };
                    
                    res = {
                       json: jest.fn(),
                       status: jest.fn(),
                       send:jest.fn()
                   };
                  
                   Hero.find.mockRejectedValueOnce('find error');
                   await getAllHeroes(req, res)
                })
                test('Then call res.status with 500', () => {
                    expect(res.status).toHaveBeenCalledWith(500)
                })

                test('Then call res.send with \'find error\'', () => {
                    expect(res.send).toHaveBeenCalledWith('find error')
                })
            })
        })
    })
   
})