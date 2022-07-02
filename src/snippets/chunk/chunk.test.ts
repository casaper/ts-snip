import { chunk } from "./chunk";

describe('chunk', () => {
  test('splits in to size one chunks if nothing else given', () => {
    const result = chunk([1, 2, '3', '4']);
    expect(result).toEqual([[1], [2], ['3'], ['4']]);
    expect(result).toHaveLength(4);
    result.forEach(item => {
      expect(item).toHaveLength(1);
    })
  });

  test('splits into chunk size two if given', () => {
    const result = chunk([1, 2, '3', '4', 5], 2);
    expect(result).toEqual([[1, 2], ['3', '4'], [5]]);
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(2);
    expect(result[1]).toHaveLength(2);
    expect(result[2]).toHaveLength(1);
  });

  test('return empty array when zero chunk size given', () => {
    expect(chunk([1, 2], 0)).toEqual([]);
  });

  test('return empty array when chunk size < 0 given', () => {
    expect(chunk([1, 2], -10)).toEqual([]);
  });
});