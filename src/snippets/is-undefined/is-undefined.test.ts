import { isUndefined } from "./is-undefined";


// @ponicode
describe('isUndefined', () => {
  test('undefined should be true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test('null should be false', () => {
    expect(isUndefined(null)).toBe(false);
  });
  test('void should be true', () => {
    expect(isUndefined()).toBe(true);
  });

  [0, '', NaN, {}, [], 'a', 1, { a: 1 }, [1], /reg/, () => undefined].forEach(subject => {
    test(`${subject} should be false`, () => {
      expect(isUndefined(subject)).toBe(false);
    });
  });
});
