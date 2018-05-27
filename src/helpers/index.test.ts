import { upperFirst, toStatus } from './';

describe('helpers', () => {
  describe('upperFirst()', () => {
    it('should uppercase the first letter in a word', () =>
      expect(upperFirst('test')).toEqual('Test'));

    it('should return an empty string', () =>
      expect(upperFirst('')).toEqual(''));
  });

  describe('toStatus{}', () =>
    it('should convert a command to a status', () => {
      expect(toStatus['start']).toEqual('Starting');
      expect(toStatus['stop']).toEqual('Stopping');
      expect(toStatus['restart']).toEqual('Restarting');
    }));
});
