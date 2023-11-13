/**
 * Transforms the properties of an object by prepending a `$` to each key.
 * Used to transform props for a styled component
 *
 * @param {Record<string, unknown>} props - The object whose properties are to be transformed.
 * @returns {Record<string, unknown>} A new object with transformed property keys.
 *
 * @example
 * getTransientProps({ name: 'John', age: 30 });
 * returns { $name: 'John', $age: 30 };
 */
export const getTransientProps = (props: Record<string, unknown>) => {
  return Object.entries(props).reduce(
    (acc, [key, val]) => ({ ...acc, [`$${key}`]: val }),
    {}
  )
}

// Used to transform the prop interface as needed
export type TransientProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}
