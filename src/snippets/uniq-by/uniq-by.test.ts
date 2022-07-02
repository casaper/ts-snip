import { uniqBy } from "./uniq-by";

fdescribe('uniqBy', () => {
  const samples = [
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 1, b: 1 },
    { a: 1, b: 1, d: 1 },
    { c: 2, d: 1 },
    { c: 1, d: 1 },
  ];

  test('uniqBy "a"', () => {
    const result = uniqBy(samples, 'a');
    expect(result).toHaveLength(4);
    expect(result).toMatchSnapshot();
  });

  test('uniqBy "b"', () => {
    const result = uniqBy(samples, 'b');
    expect(result).toHaveLength(3);
    expect(result).toMatchSnapshot();
  });
});
