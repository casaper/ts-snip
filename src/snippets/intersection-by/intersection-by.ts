/**
 * intersectionBy
 *
 * ```ts
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [2.1]
 * 
 * intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'); // => [{ x: 1 }]
 * ```
 *
 * [Playground Link](https://www.typescriptlang.org/play?ssl=40&ssc=11&pln=40&pc=65#code/GYVwdgxgLglg9mABDMUCmAnAzm68wBCAngDwBQiiAghhgIZECS6AtomgB7pgAmWFlRAB9EWKBhQBzAZRFgQLAEaYZwxABE66VSIBKuOBh4kxEsJLXylmNViJK4AGwA0icAGswcAO5gAfDpuYJ4+YM4CzGgsANJoROxcaLxYiO5xcMDUtAyRLOGUkfToaABiSJzcfIgAFABudI4gaABcWfRMrACUiAC8fm05rOF+1QLAMNhQNO2t04NRANoAuvmIAHQbdBiSWK0LG2tzHYtLy66FWmilSCK5sURLZJ2z2ccsy4gA3gIQCGLI6CKV16iC2OzWAAc4BDqt06CkLsUymo7nEANwCGCZUaCRBQIgQtAZAGYS5oXo9HqIADkpik1OEQlU+MJxJggLJFKp1KsygwDKETNxLKJmXZpOKXJpdgcjmpAm631xGDQUBAGCQ40mRzW40cgOq4pYAEZegFcZRqmCUvCBm9lstOms0LVMEQrbQAExm1S4rYYT26lA8HEW3FG719EkmhbioHk22oh5SiOxjmSxOse4rX2CTqrXH51SdDGUAC+AhVao1iC1Yh1eoNRtNfVUHp2oJSR1yDqWTpdbo9AZ9Yf9gfGvENrEj-TjZKnUWN3UpVLnxQXLE9nSLhdWJbIFbIvzA-zoIJQgJweAQxGqC0DxtcxrWnpWiHvawAzK5P2sACxvgAsloAAWuqOHAhj7gA9NBZrvg+jzHlgThoGsEGSFa+5kLBiAACogeSAAGAD6kIYNCmD4kRJLxqIIGGFAIF0LwaxHn8UCIIo56oJgV6wDe7oLJ8iAcK0pplm+wmia03plq4IliYgElvtSHDUjBcFRtJanUuJiCSexJ6oehcCYYoJZAA)
 * 
 * Inspired by [youmightnotneed.com/lodash/#intersectionBy](https://youmightnotneed.com/lodash/#intersectionBy) and refactored to TypeScript.
 */
export function intersectionBy<
  ArrayItem extends
    | string
    | number
    | Date
    | Record<string | number | symbol, unknown>
    | unknown,
  ItemKey extends keyof ArrayItem,
  IterateeFn extends (value: ArrayItem) => ArrayItem,
>(
  firstArray: ArrayItem[],
  ...args: [...ArrayItem[][], IterateeFn | ItemKey]
): ArrayItem[] {
  const iteratee = args.pop() as IterateeFn | ItemKey;
  if (
    typeof iteratee === 'string' ||
    typeof iteratee === 'number' ||
    typeof iteratee === 'symbol'
  ) {
    return firstArray.filter(item1 =>
      (args as ArrayItem[][]).every(arr2 =>
        arr2.find(
          item2 => item1[iteratee as ItemKey] === item2[iteratee as ItemKey],
        ),
      ),
    );
  }
  return firstArray.filter(item1 =>
    (args as ArrayItem[][]).every(arr2 =>
      arr2.find(item2 => iteratee(item1) === iteratee(item2)),
    ),
  );
}
