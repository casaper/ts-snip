/**
 * differenceBy
 * 
 * Creates an array with items not contained in both arrays
 *
 * ```ts
 * const a = differenceBy(
 *   [{ x: 2 }, { x: 1 }],
 *   [{ x: 1 }, { x: 3 }],
 *   'x',
 * ); // => [{ x: 2 }, { x: 3 }]
 * 
 * differenceBy(
 *   [1.1, 2.2, 3.3],
 *   [1.4, 2.2, 4.1],
 *   Math.floor
 * ); // => [3.3, 4.1]
 * 
 * differenceBy(
 *   ['  a ', '  b  ', ' c '],
 *   ['a', 'c', 'd'],
 *   val => val.trim()
 * ); // => ["  b  ", "d"] 
 * ```
 * 
 * [Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAExsYBTAThyGBCAngDwBQiiAgllgIaECSUGAtohgB7NjIDO5FRAB9EvKFhhgA5gIoiwIFgCNss4YgAitZmpEAlDBDhZkxMROnqFy7Ot6FlcADYAaROADWYOAHcwAPl13MC9fMBcBJlYAaQxCdi5cPkQPOLhgKhp6KJYIiii6ZgwAMSRObmSACgA3WicQDAAuTLpGZhYASkQAXn8W7PaI-0qBWizCSmbqVpyAbQBdPMQx1vwp8bnFgRhmQowmxALtfdL1HNjCCI71mfaFxABvbYyRwUQoQgAHDHTEHexjhget1uogAOTmSRSMHCIRqD7fX7-PZAkGgsHWFRYGFCOFvBE-DLIwHA9H2RxOMECLpPN44KAgLBIFb0ShqCgAOmAMCcu1eb0EKwAjP82L12QKAIQswj4CUCxAcli0T6VGA9PowWbEorLXiHdoXeYdeUCjmSCD1ZAYXiVYWi7W7Em0fXnOLGpZvE0KjlGSDafkKmX4Lk8vmmigrABMoo1EcE0vGbIVKcVytV6t6f0dAN1LoNMXd3tTZotVptdpoMbuOv2eoLLCNHU9AubEo6AG4BABfAT0xnMpNqUO87CBwU0EXtOOpxOrJUqytYausDV-J1FJcrzodc2Qcu22sYJdT1gdNte4d+iABiXBkfh1PR2PikuIOes+Oc9Mnl+ajf7L+7Tnl+ipliA1qHgBx7PsBF6ti2nakL2pB+mIyw9CgaCYDgeBEPyswPIgHDNFGiDdm4REkYgQrkVsFCEcRzS0RRjxMYgADMdFLGCHBUp2iAAPSCWujHUWRrFUc0XHdvMqEILwzgYByThwFIdpIfJYDoUomGoOg2C4BABCEARQockKbhRhyUZuBxHIcfRiCzOZAAsVk2W4rkWU5ACy2gABZcqpxikAJwmifZHFeT5WmKU4ymqepSiaWhUCIBAenYYZeGmQIswwhhYJuIVungiVGXgk5BW0MV4IQHVYLIGCTm1E4a5tRy4gwCwlQmuFIlZrMABEFBlcNbjDcgw3zIgcVKSpamVBAnZAA)
 */
export function differenceBy<
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
  arrayB: ArrayItem[],
  iteratee: IterateeFn | ItemKey,
): ArrayItem[] {
  if (
    typeof iteratee === 'string' ||
    typeof iteratee === 'number' ||
    typeof iteratee === 'symbol'
  ) {
    return arrayA
      .filter(
        arr1item =>
          !arrayB
            .map(i => i[iteratee as ItemKey])
            .includes(arr1item[iteratee as ItemKey]),
      )
      .concat(
        arrayB.filter(
          arr2item =>
            !arrayA
              .map(i => i[iteratee as ItemKey])
              .includes(arr2item[iteratee as ItemKey]),
        ),
      );
  }
  return arrayA
    .filter(
      arr1item =>
        !arrayB.map(arr2item => iteratee(arr2item)).includes(iteratee(arr1item)),
    )
    .concat(
      arrayB.filter(
        arr2item =>
          !arrayA
            .map(arr1item => iteratee(arr1item))
            .includes(iteratee(arr2item)),
      ),
    );
}
