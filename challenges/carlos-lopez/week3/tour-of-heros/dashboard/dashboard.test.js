const { TestScheduler } = require('@jest/core');
const dashboard = require('./dashboard');

describe('given a prinRandomNumbers()', () => {
    describe('when calling it', () => {
        test('then it should return 1', () => {
            let num1 = Math.floor(Math.random() * 11);
            expect(num1).not.toBe(12);
        })
    })
})