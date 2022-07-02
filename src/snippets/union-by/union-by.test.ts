import { unionBy } from './union-by';

describe('unionBy', () => {
  test('union with Math.floor', () => {
    const result = unionBy([2.1], [1.2, 2.3], Math.floor);
    expect(result).toEqual([2.1, 1.2]);
  });
  test('union with Math.floor and more arrays', () => {
    const result = unionBy(
      [2.1],
      [1.2, 2.3],
      [2.2],
      [2.5, 2.1, 1.1],
      Math.floor,
    );
    expect(result).toEqual([2.1, 1.2]);
  });

  test('union by item attribute', () => {
    const result = unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
    expect(result).toEqual([{ x: 1 }, { x: 2 }]);
  });

  test('union by item attribute and more arrays', () => {
    const result = unionBy(
      [{ x: 1 }],
      [{ x: 2 }, { x: 1 }],
      [{ x: 1 }],
      [{ x: 10 }, { x: 0 }],
      'x',
    );
    expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 10 }, { x: 0 }]);
  });
});
