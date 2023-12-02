import { DOMAttributes } from 'react'

export interface UseButtonProps<T> {
  buttonProps: DOMAttributes<T> & {
    ref: React.RefObject<T>
  }
}
