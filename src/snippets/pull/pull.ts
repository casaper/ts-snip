/**
 * Returns array containing elements of sourceArray not given in removeList
 *
 * ```ts
 * pull([1, 2, 3, 4], 2, 3, 5); // => [1, 4]
 * // pull an array as parameters
 * const toPull = ['a', 'c', 'x'];
 * pull(['a', 'b', 'c', 'd'], ...toPull); // => ['b', 'd']
 * ```
 * 
 * [Playground Link](https://www.typescriptlang.org/play?noImplicitAny=false&strictNullChecks=false&noImplicitReturns=false&target=7&jsx=0&module=6&pretty=true&allowSyntheticDefaultImports=false&ssl=4&ssc=2&pln=1&pc=1#code/GYVwdgxgLglg9mABABxAGzQHgMpxAJwgFMBJKIgWwBpEAlSuAN1PIoD4AKAZz0KIEF8+AIYBPAFyJcBYmUoBtALoAffEWEATBGlFTes1kpoA6U2opMiAGRhcok+heZyKSgJSIA3gChEiCAh2iOaW2ERQiAC8iGBEAO5S4RwhzDZ2bgDcvsHhBEg8MgJCYsbAMGjk+BwcRGgekWyIAIQpRGFQxgAWwlw1aIg9iOAA1mBwcUiDjpYubpneAL7eywFgQWpcAIxRKOhoHPKbNABMNADMNAAsiifnNACs86s8aETGaHAA5slEW-NQomQREQABUAAoAaSIumiAHJhLDEMpELCAEaI5GwiAYlEaWFZZ4RLggVEAKyI0B28nhsJoaNpKOxdLxigGXH8gSgBM5iCgcDBeypNLp2MU3LWEQ2xx2qAw3BJ5OgJlMfIFGCegTgr3eXx+XGO8yAA)
 */
export function pull<SourceItem, RemoveItem>(
  sourceArray: SourceItem[] | readonly SourceItem[],
  ...removeList: RemoveItem[]
) {
  const removeSet = new Set(removeList);
  return sourceArray.filter(el => !removeSet.has(el as unknown as RemoveItem));
}
