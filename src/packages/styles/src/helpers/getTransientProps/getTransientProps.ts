import { BaseProps, TransientProps } from '../../theme.types'

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

export default getTransientProps
