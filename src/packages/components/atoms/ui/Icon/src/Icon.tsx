import { getDefaultColorVar } from '@pi-lib/styles'
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
  color = getDefaultColorVar('special'),
  isBrighter = false,
  iconSize = 'calc(20px + 0.6rem)',
  dataTestid = `${iconName} icon`,
  ...props
}: IconProps) => {
  const NamedIcon = icons[iconName]
  return (
    <span
      {...props}
      data-testid={dataTestid}
      style={{ filter: isBrighter ? 'brightness(150%)' : undefined }}
    >
      <NamedIcon {...{ color, iconSize }} />
    </span>
  )
}

export default Icon
