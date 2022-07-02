import { isObject } from './is-object';

class DummyClass {
  prop = 1;
}

describe('isObject', () => {
  [{}, { a: 1 }, new DummyClass()].forEach(subject => {
    test(`'${subject}' should be true`, () => {
      expect(isObject(subject)).toBe(true);
    });
  });

  [
    DummyClass,
    [],
    [1],
    new Date(),
    Date,
    1,
    'a',
    () => null,
    /regex/,
    NaN,
    Infinity,
    new Error(),
    new Set(),
    new Map(),
  ].forEach(subject => {
    test(`'${subject}' should be false`, () => {
      expect(isObject(subject)).toBe(false);
    });
  });
});
