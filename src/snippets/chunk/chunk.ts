
/**
 * Chunk
 *
 * Creates an array of elements split into groups the length of size.  
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 * 
 * ```ts
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']); // => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3); // => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0); // => []
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1); // => []
 * ```
 * 
 * [Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABBAFuA1gHgCoD4AUAhgE7EBci2A2gLoA0yaY6AyjAF4CmiAvIgIwMIhVJwrUatXoloBKRAG8AUImQIAzlERQAtgAdpVAHQmSxGgG4ViGMET5UGNl0SY+ABnnLVq4pyggxEjColaqAL7WAO4oMAA23Pi6ekYJYADmUChe1qohKJxGeiDqKEn6Rup6cTAQnPjuQkysHJyysmGIkb7+gcEiBVaRShAaWoTSjsz4VADkhLMMswBGi4izEGuzACZbnFvAW+mzNB1KAPTnvLgycwv0MisnDHObD3O777P7X4dfxzQaCMNHAEqk4Ol8AApFgAeQAcpUoMQYBlbABPIjtKzAsCaRDLSbNGbzLarJabJa7Jb7JaHJYAhgAZjOl2uiDZPBuVDuZK2bxeOz2B2ejwBQNGeNBhTiEOhcMRmhRaOAmOW2KUuPxECJGBmgkQACYHp4LByrlyZBKQWDZZCYQikcr0hiHBqtVptrrplQDcaGABafim83s2ha6Xg+0Kp2ol2q-Dbd1AA)
 * 
 * *Refactored version of [youmightnotneed.com/lodash/#chunk](https://youmightnotneed.com/lodash/#chunk) and written in TypeScript.*
 */
export function chunk<T>(arr: T[], chunkSize = 1, cache: T[][] = []) {
  const tmp = [...arr];
  if (chunkSize <= 0) {
    return cache;
  }
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
}
