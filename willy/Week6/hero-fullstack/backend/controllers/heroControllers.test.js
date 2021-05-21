/**
 * GIVEN
 * THEN
 * AND
 * OR 
 * THEN...
 */

const {getAllHeroes, createHeroes, getById, updateHero, deleteHeroes} = require('./heroControllers')
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

    describe('Given a createHeroes function', () => {
        describe('When is invoked', () => {
            let req;
            let res;
            describe('And there is no error', () =>{
                beforeEach( async () => {
                    req = {
                       body: null,
                   };
                   
                   res = {
                      json: jest.fn(),
                  };
   
                 
                   await createHeroes(req, res)
               });
   
               test('Then call res.json once', () => {
                   expect(res.json).toHaveBeenCalled()
               });
   
               test('Then call Hero.create', () =>{
                   expect(Hero.create).toHaveBeenCalled()
               });
            })
           

        describe('And there is an error', () => {
                beforeEach( async () => {
                    req = {
                        body: null,
                    };
                    
                    res = {
                       json: jest.fn(),
                       status: jest.fn(),
                       send:jest.fn()
                   };
                  
                   Hero.create.mockRejectedValueOnce('create error');
                   await createHeroes(req, res)
                })
                test('Then call res.status with 500', () => {
                    expect(res.status).toHaveBeenCalledWith(500)
                })

                test('Then call res.send with \'create error\'', () => {
                    expect(res.send).toHaveBeenCalledWith('create error')
                })
            })
        })
    })

    describe('Given a getById function', () => {
        describe('When is invoked', () => {
            let req;
            let res;
            describe('And there is no error', () =>{
                beforeEach( async () => {
                    req = {
                       params: {id: '50'},
                   };
                   
                   res = {
                      json: jest.fn(),
                  };
   
                 
                   await getById(req, res)
               });
   
               test('Then call res.json once', () => {
                   expect(res.json).toHaveBeenCalled()
               });
   
               test('Then call Hero.getById', () =>{
                   expect(Hero.findById).toHaveBeenCalled()
               });
            })
           

            describe('And there is an error', () => {
                beforeEach( async () => {
                    req = {
                        params: {id: '50'},
                    };
                    
                    res = {
                       json: jest.fn(),
                       status: jest.fn(),
                       send:jest.fn()
                   };
                  
                   Hero.findById.mockRejectedValueOnce('findById error');
                   await getById(req, res)
                })
                test('Then call res.status with 500', () => {
                    expect(res.status).toHaveBeenCalledWith(500)
                })

                test('Then call res.send with \'findById error\'', () => {
                    expect(res.send).toHaveBeenCalledWith('findById error')
                })
            })
        })
    })
   
    describe('Given a updateHero function', () => {
        describe('When is invoked', () => {
            let req;
            let res;
            describe('And there is no error', () =>{
                beforeEach( async () => {
                    req = {
                       params: {id: '50'},
                       body: null
                   };
                   
                   res = {
                      json: jest.fn(),
                  };
   
                 
                   await updateHero(req, res)
               });
   
               test('Then call res.json once', () => {
                   expect(res.json).toHaveBeenCalled()
               });
   
               test('Then call Hero.getById', () =>{
                   expect(Hero.findByIdAndUpdate).toHaveBeenCalled()
               });
            })
           

            describe('And there is an error', () => {
                beforeEach( async () => {
                    req = {
                        params: {id: '50'},
                    };
                    
                    res = {
                       json: jest.fn(),
                       status: jest.fn(),
                       send:jest.fn()
                   };
                  
                   Hero.findByIdAndUpdate.mockRejectedValueOnce('update error');
                   await updateHero(req, res)
                })
                test('Then call res.status with 500', () => {
                    expect(res.status).toHaveBeenCalledWith(500)
                })

                test('Then call res.send with \'update error\'', () => {
                    expect(res.send).toHaveBeenCalledWith('update error')
                })
            })
        })
    })
   
    describe('Given a updateHero function', () => {
        describe('When is invoked', () => {
            let req;
            let res;
            describe('And there is no error', () =>{
                beforeEach( async () => {
                    req = {
                       params: {id: '50'},
                      
                   };
                   
                   res = {
                      json: jest.fn(),
                  };
   
                 
                   await deleteHeroes(req, res)
               });
   
               test('Then call res.json once', () => {
                   expect(res.json).toHaveBeenCalled()
               });
   
               test('Then call Hero.getById', () =>{
                   expect(Hero.findByIdAndDelete).toHaveBeenCalled()
               });
            })
           

            describe('And there is an error', () => {
                beforeEach( async () => {
                    req = {
                        params: {id: '50'},
                    };
                    
                    res = {
                       json: jest.fn(),
                       status: jest.fn(),
                       send:jest.fn()
                   };
                  
                   Hero.findByIdAndDelete.mockRejectedValueOnce('delete error');
                   await deleteHeroes(req, res)
                })
                test('Then call res.status with 204', () => {
                    expect(res.status).toHaveBeenCalledWith(204)
                })

                test('Then call res.send with \'delete error\'', () => {
                    expect(res.send).toHaveBeenCalledWith('delete error')
                })
            })
        })
    })
   
})