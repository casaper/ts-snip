/**
 * Sort array of objects by key
 *
 * [Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABDAzgORAG0wVTAEwFNgYxD8AKANwENMRCAuRcAazDgHcwBKZgIzhxMhGkgDeAKESIAToSghZSWvUKIAvFsRgsmRAB8DiVQ03bwREmXwBuSQF9Jz0JFgJEKOLKgAhAJ4APAAqiIQAHlCEBCiIAEqEEN74gShQsqQA5gA0LGDsXGAAfLkA0mGR0fixrIT+cMCIwUUU0ohJ2InuYMzBANoAutlttf7MpZJ8TYOIUjLyisrtwiLQ8GAAdEmQNFAUPBtePhQUNLn8PJpFs20yMI2tMk+IAIQUo8hINJdGt09vH1IiAuhgMfzu6D0eCspHIpz6owGPzBzwhGGw0OIsMo-ARdSRf0uc1RCyUSAADPZnk5nvdEBQoP4AA6EBqIGh4-wDV7aRkstm4xFE8FyBRkxAAZXSWXhQsQ1ylGTAmQogvxPBFMgA-IgAIyaxDMRUytVcy4K6XK2Xqg06gC0+tRT2YlL+NKepKWHMR8uBnO5Ot1hr9Puu3vxiHtQZdVMQDh49ickm2aUQ+HuwEI8jAUAAwisuutNIg+m1xOzmLrzswAEy5CDMADMceGMnLNGYAHIaJ3q4hO-xe+0uxBOy2yxWdIROIgACK7QgUTs18k1mt28m6je6zs8PtkGfzqJLlc1reb7e7+vMA9zhcn1fk7eXy5OAbJhCp9PATPZqAS7woFiDREAAeX4AArLoNlGFAKG-X9ojzAs1gQPpySRDZ5HwEAIEXNpTggCBclGS4NGucCoOgDYaBQFAYEyMBCOI2YS0RZgjj8fx4IzLMkPzTpULAEi6lfPcyycBMPzALwRA2TA4BVBC+JzACfBQKTpNTXQAFt+CzATVm6YtSzbRBwkrXIxkQOtEAALybcczI7PU+1shtEGbBxW1YlzGz7ABWALr0QB1yXJJzfOYAAWPtdRXELdXCiLvInFzbP4ZgwpCgLwvHAZ7BTKAdBAPSszUoDi0o6DYIoXT9NkQzCzQjCDmw3D8JkZiRP8MiKMg6DaPoxjutY-0OMAgI6tKhqmqEnqxJ88RJMKz9hEIeTFOmsrZAqjT7C04q0iVTI5uMkDTKixAACIAEFrr7a6AA0HuHG6AHVrsi9tmGumhXsym6AE1Xo8v6vtSsyLP7HsrK7fwhwc-s7LHN8DqKzxLUyPaqoG6jauOrIzvWdDMPavDHnpGgiIWq4wLxqAaLohimOpljy3GzxJu4wnlWJhBafjJaVq09bNpVXnscA-bnAx-AF35pALrSm9pzvY9rtPddyQAdm3a692BVXD3vTXV3XJL9cNjzbyPRdrt1ABOC9dat77J1t02tY3PXVwN-c1btigzbXDdtd1f23s9jWnYC6KfbdyHWOh6P7e913N0j6zU+D9PfYjw2kZzkPtfzg38tWmTivlqIcZA6r8bqOCa8IRXSba8gOsp0bSLphvGaGlnRo59iuZ8KaW8VwXxLbEWUzFhSlIXPapKAA)
 */
export function sortBy<T extends Record<string, unknown>, K extends keyof T>(
  collection: T[],
  key: K,
): T[] {
  return collection
    .filter(item => key in item)
    .sort((a, b) => {
      if (typeof a[key] !== typeof b[key]) {
        return String(a[key]) > String(b[key])
          ? 1
          : String(b[key]) > String(a[key])
          ? -1
          : 0;
      }
      return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
    })
    .concat(collection.filter(item => !(key in item)));
}
