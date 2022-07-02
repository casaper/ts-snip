import { difference } from './difference';

describe('difference', () => {
  test('returns different items from each array', () => {
    expect(difference([1, 2, 3, 5], [1, 3, 4, 5])).toEqual([2, 4]);
  });

  test('returns empty if there is no difference', () => {
    expect(difference([1, 2, 3, 5], [1, 2, 3, 5])).toEqual([]);
  });

  test('returns all if there is only difference', () => {
    expect(difference([1, 2], [3, 5])).toEqual([1, 2, 3, 5]);
  });
});
