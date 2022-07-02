type WrapNummeratorFn = (_skip: unknown, index: number) => number;
const nummeratorWrap = (wrapFn: (index: number) => number): WrapNummeratorFn =>
  (_skip: unknown, index: number): number => wrapFn(index);

/**
 * Times
 * 
 * Returns an array of given length, and allows to preset the containing index with a function.
 * 
 * @param length - the lenght of the desired array
 * @param nummerator - either starting number of the resulting arrays items or nummerator function
 * 
 * ```ts
 * times(3); // => [0, 1, 2]
 * times(3, 5); // => [5, 6, 7]
 * times(5, index => index * 3 + 3); // => [3, 6, 9, 12, 15]
 * ```
 * 
 * [Playground Link](https://www.typescriptlang.org/play?#code/C4TwDgpgBA6gTgQzAOQK4Ft0UcA9nAMQDsoBeKACgH0BnAawEswAuKVIuo3AdyIBooDIgBMIAD1ZEMAI2wBKMgD4oU9LLgBuAFChIUNJmwI8hEuQpDRElTPlKba7Nq0BjXERrAHWHPnhIySm5EMGJWCxFxSVs4BVJlVXU5Vn8UDB9jfGIlLShKWkYWNg4uXgFLKIck6Mc4e2CkYgirOWcAM3YXYAZ3KG6sGgpcqAAbCCIAc2AACxr1PmHVDJNWA2WskgAfKuxA5vE45QqxBeSduABtAF0oAG9hhjbKXQhcJ6WjEzJScgByROwvwU9zyeTgEGAqDgJAAgnBECAAHRtOC4dAUW6jcZTaZQAC+ckR6CQFA+vjgqQo+zEh0EkTEUAA1N5Pvg5K1hnjhuDIdCoHCEcjUejMWNJjN8YTiWBSelWRSQrLDOT2doua53J4oAhAv0IIMAMytKAAehN9guAAYBABGAQAJiuGo8XmkuoYAwoBoEAFZjWaLT6BAA2AQAdidbhdUBc7s9QbpVnsxygACooAamRn-eb4lALt6oKGoABOW3220+p06D36r22wltfAAUQQLmmFDc7C8eZBUBoEIAKrXcKhgFTaX28lGaLgxoiRrgJhQAAZdoheBg0KAAElu6+AeJXHLyeIEB7TUHtlpvHIJ2iAA)
 */
export function times(
  length: number,
  nummerator: NummeratorFn | number = (index) => index,
): number[] {
  if (typeof nummerator === 'number') {
    return Array.from({ length }).map(nummeratorWrap((index) => index + nummerator));
  }
  return Array.from({ length }).map(nummeratorWrap(nummerator));
}

export type NummeratorFn = (index: number) => number;
