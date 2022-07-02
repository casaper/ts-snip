/**
 * union
 * 
 * Creates an array of unique values, in order, from all given arrays
 * 
 * ```ts
 * union([2], [1, 2], [1, 2]); // => [2, 1]
 * ```
 * 
 * 
 * 
 * *Taken from [youmightnotneed.com/lodash/#union](https://youmightnotneed.com/lodash/#union) and written as TypeScript.*
 */
export function union<T>(arrayA: T[], ...arrays: T[][]): T[] {
  return [...new Set(arrayA.concat(...arrays))];
}
