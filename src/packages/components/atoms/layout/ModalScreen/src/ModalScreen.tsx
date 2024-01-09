import { useEffect, useState } from 'react'
import { StyledModalScreen } from './ModalScreen.style'
import { ModalScreenProps } from './ModalScreen.types'
import { getTransientProps } from '@pi-lib/styles'

/**
 * A React component used to block out the screen with modal content
 */
export const ModalScreen = ({
  children,
  isActive = false,
  isUnclickable,
}: ModalScreenProps) => {
  // Used to smooth background animation on closing
  const [isVisible, setIsVisible] = useState(isActive)
  useEffect(() => {
    setTimeout(() => setIsVisible(isActive), 200)
  }, [isActive])

  return (
    <StyledModalScreen
      {...getTransientProps({ isActive, isVisible, isUnclickable })}
    >
      {children}
    </StyledModalScreen>
  )
}

export default ModalScreen
