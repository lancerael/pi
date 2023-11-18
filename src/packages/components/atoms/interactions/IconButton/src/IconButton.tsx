import { StyledIconButton } from './IconButton.style'
import { useButtonProps, getTransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'
import CustomIcon from '@pi-lib/custom-icon/src/CustomIcon'

/**
 * This component is used to render a button with an icon
 *
 * @param {boolean} [props.isExternal] - If true, the button acts as a link to an external resource and opens in a new tab.
 * @param {string} [props.src] - The path for the icon image
 * @param {string} [props.title] - The text for tht title attribute
 * @param {string} [props.iconProps] - The props for the contained icon
 * @param {string} [props.dataTestid='pi-lib-icon-button'] - Test ID for testing purposes.
 * @param {...any} props - Additional props passed to the component.
 *
 * @returns {React.Component} The IconButton component.
 */
export const IconButton = ({
  isExternal,
  isSimple,
  src,
  title = `icon button ${src}`,
  iconProps,
  dataTestid = 'pi-lib-icon-button',
  ...props
}: IconButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(
    props,
    src ? 'a' : 'button'
  )
  return (
    <StyledIconButton
      {...{
        ...props,
        ...buttonProps,
        title,
        ...getTransientProps({ isSimple }),
      }}
      target={isExternal ? '_blank' : undefined}
      data-testid={dataTestid}
    >
      <CustomIcon {...{ src, ...iconProps }} />
    </StyledIconButton>
  )
}

export default IconButton
