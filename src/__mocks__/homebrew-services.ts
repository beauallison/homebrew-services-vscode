module.exports = {
  list: jest.fn()
    .mockImplementationOnce(async () => ({ services: new Map().set('cassandra', 'stopped') }))
    .mockImplementationOnce(async () => { throw new Error('Unavailable'); }),
  start: jest.fn()
    .mockImplementationOnce(async () => ({ status: 'started' }))
    .mockImplementationOnce(async () => { throw new Error('Unavailable'); }),
};
