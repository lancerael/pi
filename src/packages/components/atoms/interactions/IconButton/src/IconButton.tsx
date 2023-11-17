import { StyledIcon, StyledIconButton } from './IconButton.style'
import { useButtonProps, getTransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'

/**
 * This component is used to render a button with an icon.
 *
 * @param {object} props - The props for the IconButton component.
 * @param {boolean} [props.isExternal=false] - If true, the button acts as a link to an external resource and opens in a new tab.
 * @param {boolean} [props.isSmall=false] - If true, renders the button with a smaller size.
 * @param {boolean} [props.isFilled=false] - If true, the button will have a filled style.
 * @param {boolean} [props.isStroked=false] - If true, the button will have a stroked (outlined) style.
 * @param {boolean} [props.isSimple=false] - If true, renders the button with a simple style.
 * @param {boolean} [props.isIconOnly=false] - If true, the button will only display the icon, without any additional styling or text.
 * @param {string} [props.src] - The source URL for the icon image.
 * @param {string} [props.title=`icon ${props.isIconOnly ? '' : 'button'} ${src}`] - The title for the button. Defaults based on whether the button is icon-only and the source of the icon.
 * @param {string} [props.fontSize] - The font size of the icon. Defaults to '1rem' if isSmall is true, otherwise '1.2rem'.
 * @param {string} [props.dataTestid='pi-lib-icon-button'] - Test ID for testing purposes.
 * @param {number} [props.rotate] - Optional rotation degree for the icon.
 * @param {...any} props - Additional props passed to the component.
 *
 * @returns {React.Component} The IconButton component.
 */
export const IconButton = ({
  isExternal = false,
  isSmall = false,
  isFilled = false,
  isStroked = false,
  isSimple = false,
  isIconOnly = false,
  src,
  title = `icon ${isIconOnly ? '' : 'button'} ${src}`,
  fontSize = isSmall ? '1rem' : '1.2rem',
  dataTestid = 'pi-lib-icon-button',
  rotate,
  ...props
}: IconButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(props, 'a')
  const icon = (
    <StyledIcon
      {...{ src, ...getTransientProps({ fontSize, isFilled, isStroked }) }}
    />
  )
  return isIconOnly ? (
    icon
  ) : (
    <StyledIconButton
      {...{
        ...props,
        ...buttonProps,
        title,
        ...getTransientProps({ fontSize, isSimple, isIconOnly, rotate }),
      }}
      target={isExternal ? '_blank' : undefined}
      data-testid={dataTestid}
    >
      {icon}
    </StyledIconButton>
  )
}

export default IconButton
