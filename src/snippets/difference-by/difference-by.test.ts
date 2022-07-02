import { differenceBy } from './difference-by';

describe('difference-by', () => {
  test('get difference by item key', () => {
    const result = differenceBy(
      [{ x: 2 }, { x: 1 }],
      [{ x: 1 }, { x: 3 }],
      'x',
    );
    expect(result).toHaveLength(2);
    expect(result).toEqual([{ x: 2 }, { x: 3 }]);
  });

  test('get difference when flooring values', () => {
    const result = differenceBy([1.1, 2.2, 3.3], [1.4, 2.2, 4.1], Math.floor);
    expect(result).toHaveLength(2);
    expect(result).toEqual([3.3, 4.1]);
  });

  test('get difference with providing function', () => {
    const result = differenceBy(
      ['  a ', '  b  ', ' c '],
      ['a', 'c', 'd'],
      val => val.trim(),
    );
    expect(result).toHaveLength(2);
    expect(result).toEqual(['  b  ', 'd']);
  });
});
