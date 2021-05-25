const http = require('http');

const {
    requestListener,
} = require('./index');

jest.mock('http');

test('should call res.end', () => {
    const res = {
        end: jest.fn();
    }

    requestListener(null, res);

    expect(res.end).toHaveBeenCalled();
})