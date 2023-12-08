import { getTransientProps } from '@pi-lib/styles'
import { StyledCustomIcon } from './CustomIcon.style'
import { CustomIconProps } from './CustomIcon.types'

/**
 * Renders a styled icon based on given properties.
 *
 * @param {CustomIconProps} props - The properties for the CustomIcon component.
 * @returns {JSX.Element} The StyledCustomIcon component with the applied properties.
 */
export const CustomIcon = ({
  src,
  color = 'var(--special)',
  height = '1rem',
  rotate,
  isFilled,
  isStroked,
}: CustomIconProps) => {
  return (
    <StyledCustomIcon
      data-testid="pi-lib-custom-icon"
      {...{
        src,
        ...getTransientProps({ color, height, rotate, isFilled, isStroked }),
      }}
    />
  )
}

export default CustomIcon
