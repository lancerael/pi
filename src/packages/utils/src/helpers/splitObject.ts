export type SplitObject = Record<string, unknown>

/**
 * Splits an object into two parts based on a list of keys.
 *
 * @typedef {Record<string, unknown>} SplitObject - The type of the input object.
 * @param {SplitObject} target - The object to be split.
 * @param {string[]} keyList - The list of keys used to determine the split.
 * @returns {{ selected: SplitObject, rest: SplitObject }} An object containing two parts: selected and rest.
 */
export const splitObject = (target: SplitObject, keyList: string[]) => {
  return Object.keys(target).reduce(
    (results, key) => {
      if (keyList.includes(key)) results.selected[key] = target[key]
      else results.rest[key] = target[key]
      return results
    },
    {
      selected: {} as SplitObject,
      rest: {} as SplitObject,
    }
  )
}

export default splitObject
