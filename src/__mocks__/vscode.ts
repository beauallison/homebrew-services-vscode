module.exports = ({
  EventEmitter: class EventEmitter {
    fire() { return jest.fn(); }
  },
  window: {
    registerTreeDataProvider: jest.fn(),
    showInformationMessage: jest.fn(),
  },
  commands: {
    registerCommand: jest.fn(),
  },
});
