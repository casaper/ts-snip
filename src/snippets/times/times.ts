type WrapNummeratorFn = (_skip: unknown, index: number) => number;
export type NummeratorFn = (index: number) => number;

const nummeratorWrap = (wrapFn: (index: number) => number): WrapNummeratorFn =>
  (_skip: unknown, index: number): number => wrapFn(index);

export function times(
  length: number,
  nummerator: NummeratorFn | number = (index) => index,
): number[] {
  if (typeof nummerator === 'number') {
    return Array.from({ length }).map(nummeratorWrap((index) => index + nummerator));
  }
  return Array.from({ length }).map(nummeratorWrap(nummerator));
}
