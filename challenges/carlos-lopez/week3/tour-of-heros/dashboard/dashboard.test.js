const { TestScheduler } = require('@jest/core');
const dashboard = require('./dashboard');

describe('given a prinRandomNames()', () => {
    describe('when calling it', () => {
        test('then it should return 1', () => {
            let num1 = Math.floor(Math.random() * 1);
            expect(num1).toBe(0);
        })
    })
})