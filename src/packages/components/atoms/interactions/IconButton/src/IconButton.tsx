import { StyledIconButton } from './IconButton.style'
import { getTransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'
import CustomIcon from '@pi-lib/custom-icon'
import { useButtonProps } from '@pi-lib/button'

/**
 * This component is used to render a button with an icon
 *
 * @param {IconButtonProps} props - The props object for this component.
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
  const { buttonProps } = useButtonProps<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
  >(props, 'button')
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
