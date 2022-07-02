/**
 * intersection
 * 
 * Creates an array of unique values that are included in all given arrays.
 * 
 * ```ts
 * intersection([2, 1], [2, 3]); // => [2]
 * 
 * intersection(
 *   [1, 2, 3],
 *   [2, 3, 9],
 *   [4, 2, 1, 1, 1, 3]
 * ); // => [2, 3]
 * ```
 * 
 * [Playground Link](https://www.typescriptlang.org/play?ssl=12&ssc=16&pln=8&pc=11#code/GYVwdgxgLglg9mABDMUCmAnAzm68wA8AKgHwAUwM2UAghhgIYCeAXIkQNoC6ANIgHSCGGAOZY2nLtwCUE7ogDeAKESIMaKCAxJK1Ooyb9KAG3QYyMdAFtEAXhKJhY-mgBumJmWEY7D7-xQIYxAAEzQsC2tpaIBuJQBfJSUIBCwoRztkVEwcPAQyDgAmPgBGXkQivgBmLmkYxAB6Bt8Kwq5k1LhjNH5jOBEvOqSUsDTEACNMlDNc2HyVCpK+YsQangXK1b4ATl4NgBZl0uPEJdX2usbm+1bq9pGsLp6+gfG6oA)
 * 
 * *Refactored version of [youmightnotneed.com/lodash/#intersection](https://youmightnotneed.com/lodash/#intersection) and written in TypeScript.*
 */
export function intersection<T>(firstArray: T[], ...arrays: T[][]): T[] {
  return firstArray.filter(item => arrays.every(arr => arr.includes(item)));
}
