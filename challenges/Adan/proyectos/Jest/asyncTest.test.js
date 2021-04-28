const mainDoc = require('./asyncTest')

test('it should return an async function', async()=>{
 return mainDoc.retrieveDataUsingPromise().then(async (data) => {
     await expect(data).not.toEqual([]);
 });
}) 