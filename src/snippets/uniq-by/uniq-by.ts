/**
 * Unique an array of records by key
 *
 * [Playground Link](https://www.typescriptlang.org/play?noImplicitAny=false&strictNullChecks=false&noImplicitReturns=false&target=7&jsx=0&module=6&pretty=true&allowSyntheticDefaultImports=false#code/GYVwdgxgLglg9mABOGBHAQgTwDwChGIAqiApgB5QlgAmAzogEokRwBO12tUrMYA5ogA+iMCAC2AIxKshiWpklwANgBpkYANZg4AdzAA+FfkQBpUhSp1EGkpjjAiufQAoWSpc1gIAXEQDaALpqNpi+JgCUvoSBiADexqwkUCCsSG4e0PBgxgQAdMAwSpSszjCUYogAvPrWtoi89eXhOYj5hcXOLQSucGIADgCGiQBirL1qvNTkaiioICTUAIKsrAOY4VX6XQT1NORVlZXbBLPzSytrbTQAkntkPf1DJIRwm4gsjyNjYn4hAQeVd69QaJF6-WwBZo7RBQna5FiQAZQHruTxZNpFaSlcpvACEzhCu0aJDE4TJAG5cABfXC4BFcOQDfoeeiAvzGWKIAa+ACMagkvMQVKMBE53MQACZ+YLhRyubzpYgeUKRXF5UrFXzENQZarORBfFLtbq5QaNcalSrcAFafSoFyquo0FhnLQmX0WWoAOQDL3hSl2xASR2zF1u5kkWjeiR+gMIBkQENgZ2YV3uz2IL0QWN0+P26hJlNpiNRzPUHO5sAMxK0EBFVlqgb8tQQNQFqmUyu0ZQkXJKOB8Zw1utQWj+3BAA)
 */
export function uniqBy<
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T,
>(collection: T[], key: K): T[] {
  return collection
    .filter(item => key in item)
    .filter(
      (compareFrom, index, uniqArray) =>
        index ===
        uniqArray.findIndex(compareTo => {
          return compareFrom[key] === compareTo[key];
        }),
    )
    .concat(collection.filter(item => !(key in item)));
}
