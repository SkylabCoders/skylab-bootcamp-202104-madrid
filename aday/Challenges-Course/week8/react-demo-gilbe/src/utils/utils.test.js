import { getFourRandomValues, getRandomArbitrary } from './utils'


describe('Given a getRandomArbitrary function', () => {
    describe('When is invoked with two parameters', () => {
        test('Then it should return a random rumber between 0 and 10', () => {
            let prueba = getRandomArbitrary(0, 10)
            expect(prueba).not.toBe(11)
        })
    })
})

describe('Given a getFourRandomValues function', () => {
    describe('When is invoked', () => {
        test('Then it should return an array', () => {
            let prueba = getFourRandomValues()
            expect(prueba).toHaveLength(4)
        })
    })
})

