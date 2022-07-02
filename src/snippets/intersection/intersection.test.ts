import { intersection } from './intersection';

fdescribe('intersection', () => {
  test('returns array with the one item contained in both arrays', () => {
    const result = intersection([2, 1], [2, 3]);
    expect(result).toHaveLength(1);
    expect(result).toEqual([2]);
  });

  test('returns array with the one item contained in all arrays', () => {
    const result = intersection([1, 2, 3], [2, 3, 9], [4, 2, 1, 1, 1, 3]);
    expect(result).toHaveLength(2);
    expect(result).toEqual([2, 3]);
  });
});
