import { activate } from './extension';

describe('extension', () => {
  it('activate()', () =>
    expect(activate()).toBeUndefined());
});
