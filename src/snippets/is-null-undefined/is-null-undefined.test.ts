import { isNullUndefined } from "./is-null-undefined";

// @ponicode
describe('isNullUndefined', () => {

  [null, undefined].forEach(subject => {
    test(`'${subject}' should be true`, () => {
      expect(isNullUndefined(subject)).toBe(true);
    });
  });

  test('void should be true', () => {
    expect(isNullUndefined()).toBe(true);
  });

  [0, '', NaN, {}, [], 'a', 1, { a: 1 }, [1], /reg/, () => undefined].forEach(subject => {
    test(`'${subject}' should be false`, () => {
      expect(isNullUndefined(subject)).toBe(false);
    });
  });
});
