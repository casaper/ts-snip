/**
 * Difference
 *
 * Creates an array with items not contained in both arrays
 *
 * ```ts
 * difference([1, 2, 3, 5], [1, 3, 4, 5]); // => [2, 4]
 * ```
 *
 */
export function difference<T>(compareA: T[], compareB: T[]): T[] {
  return compareA
    .filter(x => !compareB.includes(x))
    .concat(compareB.filter(x => !compareA.includes(x)));
}
