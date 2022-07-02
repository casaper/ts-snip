import { pull } from './pull';

describe('pull', () => {
  test('should remove 3 and 4, and ignore 5', () => {
    expect(pull([1, 2, 3, 4], 3, 4, 5)).toEqual([1, 2]);
  });
});
