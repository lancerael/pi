import Button from '@pi-lib/button'
import { DeleteButtonProps } from './DeleteButton.types'

/**
 * Button used to delete columns or rows in the data table
 *
 */
export const DeleteButton = ({ callback, label }: DeleteButtonProps) => (
  <Button
    onPointerUp={callback}
    title={`Delete this ${label}`}
    status="error"
    isCompact
  >
    ❌
  </Button>
)

export default DeleteButton
