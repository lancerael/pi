/**
 * A utility to build an object containing attributes from a dom node
 * @param target
 * @param attributes
 * @returns a map of attributes
 */
export const getAttributes = (
  target: HTMLElement | SVGElement,
  attributes: string[]
): BuiltObject => {
  return attributes.reduce(
    (collectedAttributes: BuiltObject, attribute: string) => {
      return {
        ...collectedAttributes,
        [attribute]: target.getAttribute(attribute) ?? '',
      }
    },
    {}
  )
}

type BuiltObject = { [key: string]: string }
