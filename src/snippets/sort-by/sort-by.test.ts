import { times } from '../times/times';

import { sortBy } from './sort-by';

type StrNumA = (string | number)[];

/**
 * A-Z
 */
const alphabetCapital = (): string[] =>
  times(26, 65).map(x => String.fromCharCode(x));
/**
 * a-z
 */
const alphabetSmall = (): string[] =>
  times(26, 97).map(x => String.fromCharCode(x));

const shuffeledIndexes = [4, 1, 5, 7, 3, 2, 6, 0];

describe('sortBy', () => {
  describe('items with identical properties', () => {
    describe('with same type - number', () => {
      // array with numbers 1-8
      const aValues = times(8, 1);
      // array with numbers 120--20
      const bValues = times(8, -20)
        .map((num, index) => num + num * index * -1)
        .reverse();

      const orderedCollection = times(8).map(index => ({
        a: aValues[index],
        b: bValues[index],
      }));
      const shuffeledCollection = shuffeledIndexes.map(
        index => orderedCollection[index],
      );

      test('sorts correctly by a', () => {
        const result = sortBy(shuffeledCollection, 'a');
        result.forEach((item, index) => {
          expect(item).toBe(orderedCollection[index]);
        });
      });
      test('sorts correctly by b', () => {
        const result = sortBy(shuffeledCollection, 'b');
        times(8)
          .reverse()
          .forEach((orderedIndex, resultIndex) => {
            expect(result[resultIndex]).toBe(orderedCollection[orderedIndex]);
          });
      });
    });
  });

  describe('with same type - string', () => {
    const aValues = alphabetCapital();
    const bValues = alphabetSmall().reverse();

    const orderedCollection = times(8).map(index => ({
      a: aValues[index],
      b: bValues[index],
    }));
    const shuffeledCollection = shuffeledIndexes.map(
      index => orderedCollection[index],
    );

    test('sorts correctly by a', () => {
      const result = sortBy(shuffeledCollection, 'a');
      result.forEach((item, index) => {
        expect(item).toBe(orderedCollection[index]);
      });
    });
    test('sorts correctly by b', () => {
      const result = sortBy(shuffeledCollection, 'b');
      times(8)
        .reverse()
        .forEach((orderedIndex, resultIndex) => {
          expect(result[resultIndex]).toBe(orderedCollection[orderedIndex]);
        });
    });
  });

  describe('with same type - Date', () => {
    // array with Dates 2022-07-01 - 2022-07-08
    const aValues = times(8, 1).map(num => new Date(`2022-07-0${num}`));
    // array with Dates 2022-07-31 - 2022-07-24
    const bValues = times(8, 23)
      .reverse()
      .map(num => new Date(`2022-07-${num}`));

    const orderedCollection = times(8).map(index => ({
      a: aValues[index],
      b: bValues[index],
    }));
    const shuffeledCollection = shuffeledIndexes.map(
      index => orderedCollection[index],
    );

    test('sorts correctly by a', () => {
      const result = sortBy(shuffeledCollection, 'a');
      result.forEach((item, index) => {
        expect(item).toBe(orderedCollection[index]);
      });
    });
    test('sorts correctly by b', () => {
      const result = sortBy(shuffeledCollection, 'b');
      times(8)
        .reverse()
        .forEach((orderedIndex, resultIndex) => {
          expect(result[resultIndex]).toBe(orderedCollection[orderedIndex]);
        });
    });
  });

  describe('with number and string', () => {
    // array with numbers 1-8
    const aValues = (times(4, 1) as StrNumA).concat(
      alphabetCapital().slice(4, 8),
    );
    // array with numbers 120--20
    const bValues = (
      times(4, -20).map((num, index) => num + num * index * -1) as StrNumA
    )
      .concat(alphabetSmall().reverse().slice(4, 8).reverse())
      .reverse();

    const orderedCollection = times(8).map(index => ({
      a: aValues[index],
      b: bValues[index],
    }));
    const shuffeledCollection = shuffeledIndexes.map(
      index => orderedCollection[index],
    );

    test('sorts correctly by a', () => {
      const result = sortBy(shuffeledCollection, 'a');
      result.forEach((item, index) => {
        expect(item).toEqual(orderedCollection[index]);
      });
    });
    test('sorts correctly by b', () => {
      const result = sortBy(shuffeledCollection, 'b');
      times(8)
        .reverse()
        .forEach((orderedIndex, resultIndex) => {
          expect(result[resultIndex]).toBe(orderedCollection[orderedIndex]);
        });
    });
  });

  describe('items with different properties', () => {
    const orderedCollection = [
      { a: 1, b: 5 },
      { a: 2, b: 4 },
      { c: 3, d: 3 },
      { c: 4, d: 2 },
      { c: 5, d: 1 },
      { c: 6, d: 0 },
      { c: 7, d: -1 },
      { c: 8, d: -2 },
    ];
    const shuffeledCollection = shuffeledIndexes.map(
      index => orderedCollection[index],
    );

    test('sorts correctly by "a" and appends non matching key items', () => {
      const result = sortBy(shuffeledCollection, 'a');
      expect(result[0]).toBe(orderedCollection[0]);
      expect(result[1]).toBe(orderedCollection[1]);
      expect(result.slice(2)).toContain(orderedCollection[2]);
      expect(result.slice(2)).toContain(orderedCollection[7]);
    });

    test('sorts correctly by "b" and appends non matching key items ', () => {
      const result = sortBy(shuffeledCollection, 'b');
      expect(result[0]).toBe(orderedCollection[1]);
      expect(result[1]).toBe(orderedCollection[0]);
      expect(result.slice(2)).toContain(orderedCollection[2]);
      expect(result.slice(2)).toContain(orderedCollection[7]);
    });

    test('sorts correctly by "c" and appends non matching key items ', () => {
      const result = sortBy(shuffeledCollection, 'c');
      times(6, 2).forEach((orderedIndex, index) => {
        expect(result[index]).toBe(orderedCollection[orderedIndex]);
      });
      expect(result.slice(6)).toContain(orderedCollection[0]);
      expect(result.slice(6)).toContain(orderedCollection[1]);
    });
  });

  describe('with some items having undefined or null values', () => {
    const orderedCollection = [
      { a: undefined, b: 8 },
      { a: 2, b: 7 },
      { a: 3, b: 6 },
      { a: undefined, b: 5 },
      { a: 5, b: 4 },
      { a: null, b: null },
      { a: 7, b: 2 },
      { a: 8, b: 1 },
    ];
    const shuffeledCollection = shuffeledIndexes.map(
      index => orderedCollection[index],
    );

    test('sorts correctly by "a" and appends non matching key items', () => {
      const result = sortBy(shuffeledCollection, 'a');
      expect(result[0]).toBe(orderedCollection[1]);
      expect(result[1]).toBe(orderedCollection[2]);
      expect(result[2]).toBe(orderedCollection[4]);
      expect(result[3]).toBe(orderedCollection[6]);
      expect(result[4]).toBe(orderedCollection[7]);
      expect(result.slice(5)).toContain(orderedCollection[0]);
      expect(result.slice(5)).toContain(orderedCollection[3]);
      expect(result.slice(5)).toContain(orderedCollection[5]);
    });
  });
});
