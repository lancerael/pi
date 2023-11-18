import { IconProps } from './Icon.types'
import * as icons from './icons'

/**
 * `Icon` is a component that renders a specific icon from a predefined set of icons.
 * It allows customization of the icon's color and size.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @param {string} props.iconName - The name of the icon to be rendered. This should match one of the keys in the imported `icons` object.
 * @param {string} [props.color='var(--outline)'] - The color of the icon.
 * @param {string} [props.size='calc(20px + 0.6rem)'] - The size of the icon.
 * @returns {React.ReactNode} The rendered icon as a React component.
 */
export const Icon = ({
  iconName,
  color = 'var(--outline)',
  size = 'calc(20px + 0.6rem)',
}: IconProps) => {
  const NamedIcon = icons[iconName]
  return <NamedIcon {...{ color, size }} />
}

export default Icon
