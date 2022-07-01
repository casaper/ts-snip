/**
 * Checks value is falsy or empty array or object
 *
 * Returns true if value is:
 *
 * - `undefined`
 * - `null`
 * - `false`
 * - empty `string` - `''`
 * - empty `array` - `[]`
 * - empty `Object` - `{}`
 * - `0`
 * - NaN
 * 
 * [Playground Link](https://www.typescriptlang.org/play?noImplicitAny=false&strictNullChecks=false&noImplicitReturns=false&target=7&jsx=0&module=6&pretty=true&allowSyntheticDefaultImports=false#code/GYVwdgxgLglg9mABDAzgUQLYAcoE8AUAbgIYA2IApgFyLgDWYcA7mAJQ0BGccpFxSAbwBQiRACcKUEGKQBCEuQqIAPssQAhbr374RoxETKUAdBAQooYkNDhjEAXkeIA8hwBWFaCrUKTZsBZWNnaO9ogAgmJixLisiABk8Xqisq4e0MYUYJYwFCiGiqzGvGAA5lAAFnqsANxCAL5C-haIKCDunlAoDojCouAAJhTANIPDMGAUAwA0emAwpDRgIKSks6IcAGJkKNSIwDsU64gcpPx0AMo5ZTQA5LfHWBK72VdiE6V3xCgDwA96FGweEi0VwNAA2gBdY6MMCYHC4EExCEARmmiHu0IBQNwaU6NAE9RhCHheDx0AJiGINBRiCJegAXhQxHAaAAGYlgABazLgADkQBgOMz2cY0XN+DQ+cQ+Q0hEJyVBMtl3nl8G0OtAUEVgLY0MQIBV8PhwXQKLh0Rr0lBIXF7AA+Xp6Zo8CjFOClfBmi3IdA49Xta2sVgNWpAA)
 */
export function isEmpty(value: unknown): boolean {
  return !value || Boolean(
    (value.constructor === Object || value.constructor === Array) &&
    !Object.entries(value).length
  );
}
