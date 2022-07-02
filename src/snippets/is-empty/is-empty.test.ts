import { isEmpty } from './is-empty';

class DummyClass {}

describe('isEmpty', () => {

  [{}, [], false, null, undefined, 0].forEach(subject => {
    test(`'${subject}' should be true`, () => {
      expect(isEmpty(subject)).toBe(true);
    });
  });

  test('void should be true', () => {
    expect(isEmpty()).toBe(true)
  });


  ['a', 1, { a: 1 }, [1], /reg/, () => undefined, DummyClass, new DummyClass()].forEach(subject => {
    test(`'${subject}' should be false`, () => {
      expect(isEmpty(subject)).toBe(false);
    });
  });
});
