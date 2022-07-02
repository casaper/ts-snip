import { notNil } from './not-nil';

// @ponicode
describe('notNil', () => {
  test('null should be false', () => {
    expect(notNil(null)).toBe(false);
  });

  test('undefined should be true', () => {
    expect(notNil(undefined)).toBe(false);
  });

  [0, '', NaN, {}, [], 'a', 1, { a: 1 }, [1], /reg/, () => undefined].forEach(subject => {
    test(`${subject} should be false`, () => {
      expect(notNil(subject)).toBe(true);
    });
  });
});
