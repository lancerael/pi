import { getTransientProps } from '@pi-lib/utils'
import { StyledCustomIcon } from './CustomIcon.style'
import { CustomIconProps } from './CustomIcon.types'

/**
 * Renders a styled icon based on given properties.
 *
 * @param {CustomIconProps} props - The properties for the CustomIcon component.
 * @param {string} props.src - The source URL of the icon.
 * @param {string} [props.color='var(--special)'] - The color of the icon.
 * @param {string} [props.height='1rem'] - The height of the icon.
 * @param {number} [props.rotate] - The rotation angle of the icon in degrees.
 * @param {boolean} [props.isFilled] - Indicates if the icon should be filled.
 * @param {boolean} [props.isStroked] - Indicates if the icon should be stroked.
 * @returns {JSX.Element} The StyledCustomIcon component with the applied properties.
 */
export const CustomIcon = ({
  src,
  color = 'var(--special)',
  height = '1rem',
  rotate,
  isFilled,
  isStroked,
}: CustomIconProps) => (
  <StyledCustomIcon
    data-testid="pi-lib-custom-icon"
    {...{
      src,
      ...getTransientProps({ color, height, rotate, isFilled, isStroked }),
    }}
  />
)

export default CustomIcon
