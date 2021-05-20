const {
  requestListener,
} = require('./index2');

test('should call res.end', () => {
  global.http = {
    createServer: jest.fn().mockReturnValue({
      listen: jest.fn(),
    }),
  };

  const res = {
    end: jest.fn(),
  };

  requestListener(null, res);

  expect(res.end).toHaveBeenCalled();
});
