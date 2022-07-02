import { isNull } from './is-null';
// @ponicode
describe('isNull', () => {
  test('null should be true', () => {
    expect(isNull(null)).toBe(true);
  });

  [undefined, 0, '', NaN, {}, [], 'a', 1, { a: 1 }, [1], /reg/, () => undefined].forEach(subject => {
    test(`'${subject}' should be false`, () => {
      expect(isNull(subject)).toBe(false);
    });
  });
});
