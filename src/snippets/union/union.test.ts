import { union } from './union';

describe('union', () => {
  test('create unified array [2,1] from three arrays', () => {
    const result = union([2], [1, 2], [1, 2]);
    expect(result).toEqual([2, 1]);
  });
});
