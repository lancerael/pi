import { IconProps } from './Icon.types'
import * as icons from './icons'

/**
 * `Icon` is a component that renders a specific icon from a predefined set of icons.
 * It allows customization of the icon's color and size.
 *
 * @param {IconProps} props - The properties for the Icon component.
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
