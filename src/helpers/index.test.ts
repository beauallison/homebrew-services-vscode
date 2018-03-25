import { upperFirst } from './';

describe('helpers', () => {
  describe('upperFirst()', () => {
    it('should uppercase the first letter in a word', () =>
      expect(upperFirst('test')).toEqual('Test'));

    it('should return an empty string', () =>
      expect(upperFirst('')).toEqual(''));
  });
});
