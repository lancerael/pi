import IconButton from '@pi-lib/icon-button'
import {
  StyledAction,
  StyledButton,
  StyledIconButton,
} from './EditorAction.style'
import { ActionProps } from './EditorAction.types'
import Button from '@pi-lib/button'
import { CLOUDFRONT_URL } from '../../../main'

/**
 * A component to handle each of the actions on the table
 */
export const EditorAction = ({
  title,
  label,
  onPointerUp,
  $isStroked = false,
  $isFilled = false,
}: ActionProps) => {
  const iconPath = `${CLOUDFRONT_URL}/${label
    .toLowerCase()
    .split(' ')
    .join('-')}.svg`
  return (
    <StyledAction>
      <StyledIconButton>
        <IconButton
          {...{ title, onPointerUp, $isStroked, $isFilled }}
          isSmall
          src={iconPath}
        />
      </StyledIconButton>
      <StyledButton>
        <Button {...{ title, onPointerUp, isSpecial: true }}>
          {label.toUpperCase()}
        </Button>
      </StyledButton>
    </StyledAction>
  )
}

export default EditorAction
