import { IconProps } from './Icon.types'
import * as icons from './icons'

/**
 * An icon component with a selection of icons
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
