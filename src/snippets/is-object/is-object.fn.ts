/**
 * True if subject is a dictionary like object
 *
 * ```ts
 * isObject({ a: 1 }); // => true
 * isObject([1]); // => false
 * isObject(new Date()); // => false
 * isObject(/reg/); // => false
 * isObject(function() { return 'str'; }); // => false
 * // only true for clas instance
 * class DemoIt {
 *   public ab = 1;
 * }
 * isObject(DemoIt); // => false
 * isObject(new DemoIt()); // => true
 * ```
 */
export function isObject(subject: unknown): boolean {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
