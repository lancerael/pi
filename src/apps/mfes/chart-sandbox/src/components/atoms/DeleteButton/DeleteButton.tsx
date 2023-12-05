import Button from '@pi-lib/button'
import { DeleteButtonProps } from './DeleteButton.types'

/**
 * Button used to delete columns or rows in the data table
 *
 */
export const DeleteButton = ({ callback, label }: DeleteButtonProps) => (
  <Button
    onClick={callback}
    title={`Delete this ${label}`}
    status="error"
    isCompact
    isInverted
    isShadowed
    boxName="alt"
    buttonSize="small"
    style={{ fontSize: '0.7rem' }}
  >
    ❌
  </Button>
)

export default DeleteButton
