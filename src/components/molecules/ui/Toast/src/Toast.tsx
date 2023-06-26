import DismissableContent from '@pi-lib/dismissable-content'
import { ToastProps } from './Toast.types'
import { StyledToastContainer } from './Toast.style'

/**
 * A React component to handle toast notifications
 */
export const Toast = ({ toasts }: ToastProps) => {
  return (
    <StyledToastContainer>
      {Object.keys(toasts).map((toastName: keyof typeof toasts) => {
        return <DismissableContent key={toastName} {...toasts[toastName]} />
      })}
    </StyledToastContainer>
  )
}

export default Toast
