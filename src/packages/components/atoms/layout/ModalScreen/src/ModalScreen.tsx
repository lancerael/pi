import { useEffect, useState } from 'react'
import { StyledModalScreen } from './ModalScreen.style'
import { ModalScreenProps } from './ModalScreen.types'

/**
 * A React component used to block out the screen with modal content
 */
export const ModalScreen = ({
  children,
  isActive = false,
}: ModalScreenProps) => {
  // Used to smooth background animation on closing
  const [isVisible, setIsVisible] = useState(isActive)
  useEffect(() => {
    setTimeout(() => setIsVisible(isActive), 200)
  }, [isActive])
  return (
    <StyledModalScreen {...{ isActive, isVisible }}>
      {children}
    </StyledModalScreen>
  )
}

export default ModalScreen
