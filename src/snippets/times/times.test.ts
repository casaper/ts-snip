import { times } from "./times";

describe('times', () => {
  describe('times without nummerator function', () => {
    test('creates array with 4 items', () => {
      expect(times(4)).toHaveLength(4);
    });
    test('creates array 0-3', () => {
      expect(times(4)).toEqual([0, 1, 2, 3]);
    });
  });

  describe('passing a nummerator function', () => {
    test('adds 10 with nummerator function', () => {
      expect(times(4, index => index + 10)).toEqual([10, 11, 12, 13]);
    });
  });

  describe('passing a add index number', () => {
    test('adds 10 with when passing 10', () => {
      expect(times(4, 10)).toEqual([10, 11, 12, 13]);
    });
  });
});