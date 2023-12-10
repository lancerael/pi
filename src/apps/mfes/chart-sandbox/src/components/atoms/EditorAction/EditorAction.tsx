import IconButton from '@pi-lib/icon-button'
import {
  StyledAction,
  StyledButton,
  StyledIconButton,
} from './EditorAction.style'
import { ActionProps } from './EditorAction.types'
import Button from '@pi-lib/button'
import { useTheme } from 'styled-components'

/**
 * A component to handle each of the actions on the table
 */
export const EditorAction = ({
  title,
  label,
  onClick,
  isStroked = false,
  isFilled = false,
}: ActionProps) => {
  const { colors } = useTheme()
  const src = `${
    import.meta.env.VITE_CLOUDFRONT_URL ?? '__CLOUDFRONT_URL__'
  }/${label.toLowerCase().split(' ').join('-')}.svg`
  return (
    <StyledAction>
      <StyledIconButton>
        <IconButton
          buttonProps={{
            title,
            onClick,
            boxName: 'hi',
            isInverted: true,
          }}
          iconProps={{ src, isStroked, isFilled, color: colors.text }}
        />
      </StyledIconButton>
      <StyledButton>
        <Button {...{ title, onClick, boxName: 'hi', isInverted: true }}>
          {label.toUpperCase()}
        </Button>
      </StyledButton>
    </StyledAction>
  )
}

export default EditorAction
