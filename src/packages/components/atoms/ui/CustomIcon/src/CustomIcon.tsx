import { getTransientProps } from '@pi-lib/styles'
import { StyledCustomIcon } from './CustomIcon.style'
import { CustomIconProps } from './CustomIcon.types'
import { withTheme } from 'styled-components'

/**
 * Renders a styled icon based on given properties.
 *
 * @param {CustomIconProps} props - The properties for the CustomIcon component.
 * @returns {JSX.Element} The StyledCustomIcon component with the applied properties.
 */
export const CustomIcon = ({
  src,
  color,
  height,
  rotate,
  isFilled,
  isStroked,
  dataTestid = 'pi-lib-custom-icon',
  ...props
}: CustomIconProps) => {
  return (
    <StyledCustomIcon
      data-testid={dataTestid}
      {...{
        src,
        ...getTransientProps({ color, height, rotate, isFilled, isStroked }),
        ...props,
      }}
    />
  )
}

export default withTheme(CustomIcon)
