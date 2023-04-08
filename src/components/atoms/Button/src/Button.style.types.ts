import { ITheme } from '@pi-lib/styles/src/theme.types'
import { Status } from '@pi-lib/types'

export interface StyledButtonProps {
  theme: ITheme
  status: Status
  isCompact?: boolean
  isSpecial?: boolean
}
