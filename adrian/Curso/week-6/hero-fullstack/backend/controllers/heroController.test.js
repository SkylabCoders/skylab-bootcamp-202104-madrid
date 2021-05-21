

const { getAll, create, getById } = require('./heroControllers')
const Hero = require('../models/heroModels')
jest.mock('../models/heromodels.js')

describe('heroController', ()=>{
    describe('Given a getAll function', ()=>{
        describe('When is invoked',()=>{
            describe('And there is not error',()=>{
                let req;
                let res;
                beforeEach(async()=>{
                    req = {
                        query: null
                    };
                    res = {
                        json: jest.fn()
                    }
                    await getAll(req, res)
                })
                test('Then call heroFind',()=>{
                    expect(Hero.find).toHaveBeenCalled()
                })
                test('Then call res.json',()=>{
                    expect(res.json).toHaveBeenCalled()
                })
            })

            describe('And there is an error', ()=>{
                beforeEach(async()=>{
                    req = {
                        query: null
                    };
                    res = {
                        json: jest.fn(),
                        status: jest.fn(),
                        send: jest.fn(),
                    }

                    Hero.find.mockRejectedValueOnce('find error')

                    await getAll(req, res)
                })
                
                test('And there is an error',()=>{
                    expect(res.status).toHaveBeenCalledWith(500)
                });
    
                test('Then call res.send with/find error/', ()=>{
                    expect(res.send).toHaveBeenCalledWith('find error')
                })
            })
        })
    })
    /*describe('Given a create function', ()=>{
        describe('When is invoked',()=>{
            describe('And there is not error',()=>{
                let req;
                let res;
                beforeEach(async()=>{
                    req = {
                        body: {}
                    };
                    res = {
                        json: jest.fn()
                    }
                    await create(req, res)
                })
                test('Then call res.send',()=>{
                    expect(Hero.save).toHaveBeenCalled()
                })
                test('Then call res.json',()=>{
                    expect(res.json).toHaveBeenCalled()
                })
            })

            describe('And there is an error', ()=>{
                beforeEach(async()=>{
                    req = {
                        body: {}
                    };
                    res = {
                        json: jest.fn(),
                        status: jest.fn(),
                        send: jest.fn(),
                    }

                    save.mockRejectedValueOnce(' error')

                    await create(req, res)
                })
                
                test('And there is an error',()=>{
                    expect(res.status).toHaveBeenCalledWith(500)
                });
    
                test('Then call res.send with/find error/', ()=>{
                    expect(res.send).toHaveBeenCalledWith('find error')
                })
            })
        })
    })*/
    describe('Given a getById function', ()=>{
        describe('When is invoked',()=>{
            describe('And there is not error',()=>{
                let req;
                let res;
                beforeEach(async()=>{
                    req = {
                        heroId: 'myHeroId'
                    };
                    res = {
                        json: jest.fn()
                    }
                    await getById(req, res)
                })
                test('Then call res.jason',()=>{
                    expect(Hero.findById).toHaveBeenCalled()
                })
                test('Then call res.json',()=>{
                    expect(res.json).toHaveBeenCalled()
                })
            })

            describe('And there is an error', ()=>{
                beforeEach(async()=>{
                    req = {
                        body: {}
                    };
                    res = {
                        json: jest.fn(),
                        status: jest.fn(),
                        send: jest.fn(),
                    }

                    Hero.findById.mockRejectedValueOnce('send error')

                    await getById(req, res)
                })
                
                test('And there is an error',()=>{
                    expect(res.status).toHaveBeenCalledWith(500)
                });
    
                test('Then call res.send with/find error/', ()=>{
                    expect(res.send).toHaveBeenCalledWith('send error')
                })
            })
        })
    })
})