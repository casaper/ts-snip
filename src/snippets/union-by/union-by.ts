/**
 * unionBy
 * 
 * This method is like union except that it accepts iteratee which is invoked for each  
 * element of each arrays to generate the criterion by which uniqueness is computed.  
 * Result values are chosen from the first array in which the value occurs.  
 * The iteratee is invoked with one argument:  
 * (value).
 *
 * [Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABOeYBCBPAPAKEYgQQCciBDDASSgFMBbRagDxrABMBnPfRAH0XahEYYAOZd8fMCFoAjakXG9EAEVI1FfAErUIcIqywChopVNnyl7DLLgAbADTIwAazBwA7mAB8Gp649g9lxUdADS1BgMzNRs7IjOEXDAhCTkIbRB+CFkNNQAYkhMLByIABQAbqS2INQAXClklDS0AJSIALxeDWnNQV6lXKSpGAT1xI3pANoAupmIAHSLQ43s9ZOL8+M9dDMzjtlq1PlIfOnhGNM4LWPDU9OIAN5cumACiDA0OUcdiMvk7PMAA5wQGlNqkOIHXIFJRnCIAbi4MGSA24iCgGEB1CS70+h2oHXa7UQAHIjMIRCTeDxFBisTiPvJ8YTiSSzHIiFSeDS0XTsclGV8CUTWVYbLYSVw2k80URqFAQEQkH8Rop8PMXhA1KUNqUVXEId0mjtpjMWi01QtgDBbJ9UWjuKVGRl3mwmI4IIq5WAoG1Opa0cJWEwWQHuJ6SDEoPNrWwKG7GPaHQ6wEUOl1nZNBczDXCLizEKnmFm8blfpDmudZmH8C05miWoj8ABfLhyhVK37DAiKDUILVQHWLPXDA1xLbG2i7abm3vW23yJOO52OIPuxAR72+9NhteMAubqMxoPx4OJotQdO4pm5J3NP1E69C0oX831xCNnCtnA4F5vUg-CgCCYKUkwAEzzAAjLMiCTJB8xgY4EEAMwwQAsmoAAWMa2HAeifgA9ARV7gVBjjwWBlx-nY1DzLhIh6p+OBEYgAAqmEEgABgA+kCRAgvIGKcU+zLsJhehQJhpBsPMv4IG8MiAWAqAgZMDyIIw9SQYgzYwWpGn1GBOmOOpmmINpumOCSjAkoRxGdLB6nWSSWnGY8pI2YZOlUfJNF0XADEyExLG8SgACOmBRKQtCArY1Bya8l4QEpKkYKBEGQeRCFIfMqGOBhkk4XhRB2SRGVZZRCXsH59GlBAn5AA)
 * 
 * *Refactored [youmightnotneed.com/lodash/#unionBy](https://youmightnotneed.com/lodash/#unionBy) and written in TypeScript.*
 */
export function unionBy<
  ArrayItem extends
    | string
    | number
    | Date
    | Record<string | number | symbol, unknown>
    | unknown,
  ItemKey extends keyof ArrayItem,
  IterateeFn extends (value: ArrayItem) => ArrayItem,
>(
  arrayA: ArrayItem[],
  ...arrays: [...ArrayItem[][], IterateeFn | ItemKey]
): ArrayItem[] {
  const iteratee = arrays.pop() as IterateeFn | ItemKey;
  if (
    typeof iteratee === 'string' ||
    typeof iteratee === 'number' ||
    typeof iteratee === 'symbol'
  ) {
    return arrayA
      .concat(...(arrays as ArrayItem[][]))
      .filter(
        (item, index, current) =>
          index ===
          current.findIndex(
            next => item[iteratee as ItemKey] === next[iteratee as ItemKey],
          ),
      );
  }
  return arrayA
    .concat(...(arrays as ArrayItem[][]))
    .filter(
      (item, index, current) =>
        index === current.findIndex(next => iteratee(item) === iteratee(next)),
    );
}
