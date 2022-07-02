import { intersectionBy } from './intersection-by';

describe('intersectionBy', () => {
  test('intersection by Math.floor function', () => {
    const result = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([2.1]);
  });

  test('intersection by Math.floor function more items', () => {
    const result = intersectionBy([2.1, 1.2], [2.3, 3.4], [5.5, 2.23], [2.9], Math.floor);
    expect(result).toEqual([2.1]);
  });

  test('intersection by property', () => {
    const result = intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
    expect(result).toEqual([{ x: 1 }]);
  });

  test('intersection by property more items', () => {
    const result = intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], [{ x: 1 }, { x: 15 }], [{ x: 1 }], 'x');
    expect(result).toEqual([{ x: 1 }]);
  });

  test('intersection by custom function', () => {
    const result = intersectionBy([' a', 'b  '], ['a  ', 'c', '  b'], item =>
      item.trim(),
    );
    expect(result).toEqual([' a', 'b  ']);
  });
});
