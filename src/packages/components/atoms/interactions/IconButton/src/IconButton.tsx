import { IconButtonProps } from './IconButton.types'
import CustomIcon from '@pi-lib/custom-icon'
import Button from '@pi-lib/button'
import { memo } from 'react'

/**
 * This component is used to render a button with an icon
 *
 * @param {IconButtonProps} props - The props object for this component.
 * @returns {React.Component} The IconButton component.
 */
export const IconButton = memo(
  ({ buttonProps, iconProps }: IconButtonProps) => {
    return (
      <Button isInline isCompact {...buttonProps}>
        <CustomIcon {...iconProps} />
      </Button>
    )
  }
)

export default IconButton
