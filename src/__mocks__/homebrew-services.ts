module.exports = {
  list: () => ({
    services: new Map().set('cassandra', 'stopped'),
  }),
  start: () => ({ status: 'started' }),
};
