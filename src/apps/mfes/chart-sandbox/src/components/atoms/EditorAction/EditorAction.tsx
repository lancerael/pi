import IconButton from '@pi-lib/icon-button'
import {
  StyledAction,
  StyledButton,
  StyledIconButton,
} from './EditorAction.style'
import { ActionProps } from './EditorAction.types'
import Button from '@pi-lib/button'

/**
 * A component to handle each of the actions on the table
 */
export const EditorAction = ({
  title,
  label,
  onPointerUp,
  isStroked = false,
  isFilled = false,
}: ActionProps) => {
  const iconPath = `${
    import.meta.env.VITE_CLOUDFRONT_URL ?? '__CLOUDFRONT_URL__'
  }/${label.toLowerCase().split(' ').join('-')}.svg`
  return (
    <StyledAction>
      <StyledIconButton>
        <IconButton
          {...{ title, onPointerUp, isStroked, isFilled }}
          isSmall
          src={iconPath}
        />
      </StyledIconButton>
      <StyledButton>
        <Button {...{ title, onPointerUp, isInverted: true }}>
          {label.toUpperCase()}
        </Button>
      </StyledButton>
    </StyledAction>
  )
}

export default EditorAction
