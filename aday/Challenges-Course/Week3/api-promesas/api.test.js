const { test, expect } = require('@jest/globals');
const principal = require('./api')

test('the function must return an object like{name:"pepe", id:10]', () => {
    return principal.getUser().then(data=>{
        expect(data).toEqual({name:"pepe",id:10});
    });
});

test('the array must contain "async" word after 2 secs', async () => {
    const data = await principal.fetchData();
    expect(data).toContain('async');
});

test('it should return a response from the server', () => {
   return principal.retrieveDataUsingPromise().then(async (data) => 
   await expect(data).not.toEqual([]));

});