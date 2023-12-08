import { TransientProps } from '@pi-lib/styles'
import { InputProps } from './Input.types'

/**
 * The props for the styled text input (pick type from main props)
 */
export type StyledTextInputProps = TransientProps<Pick<InputProps, 'type'>>
