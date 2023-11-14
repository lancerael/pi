/**
 * Transforms the keys of an object by prefixing each key with `$`.
 * This is typically used for creating transient props in styled components.
 *
 * @template T The type of the input object, should extend BaseProps.
 * @param {T} props - The object whose keys are to be transformed.
 * @returns {TransientProps<T>} - An object with the same values as the input object,
 *                                but with each key prefixed with `$`.
 *
 * @example
 * const props = { color: 'red', size: 10 };
 * const transientProps = getTransientProps(props);
 * // transientProps will be { $color: 'red', $size: 10 }
 */
export const getTransientProps = <T extends BaseProps = BaseProps>(
  props: T
): TransientProps<T> => {
  return Object.entries(props).reduce(
    (acc, [key, val]) => ({ ...acc, [`$${key}`]: val }),
    {} as TransientProps<T>
  )
}

/**
 * Represents a type where each key of an object is prefixed with `$`.
 * Useful for representing transient props in styled components.
 *
 * @template T Base type from which the transient props are derived.
 *             Defaults to BaseProps if not specified.
 */
export type TransientProps<T = BaseProps> = {
  [K in keyof T as `$${string & K}`]: T[K]
}

/**
 * Represents the base type for props. This is a generic record type
 * with string keys and values of any type.
 */
export type BaseProps = Record<string, unknown>
