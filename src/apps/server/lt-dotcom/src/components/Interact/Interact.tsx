import Image from 'next/image'
import { useEffect, useState } from 'react'
import { spiralStyle } from './Interact.helpers'
import { MAX_COUNT } from './Interact.constants'
import { StyledContainer } from './Interact.styles'

export const Interact = () => {
  const [tracker, setStracker] = useState({
    styles: spiralStyle(0),
    isAlt: false,
  })

  useEffect(() => {
    let count = 0
    const altInterval = setInterval(() => {
      count++
      setStracker({
        styles: spiralStyle(count),
        isAlt: !(count % 16),
      })
      if (count > MAX_COUNT) clearInterval(altInterval)
    }, 100)
    return () => clearInterval(altInterval)
  }, [])

  return (
    <StyledContainer style={{ ...tracker.styles }}>
      <Image
        style={{ opacity: '0.9' }}
        src={`/hand${tracker.isAlt ? '2' : ''}.svg`}
        alt="Interaction"
        width={36}
        height={36}
      />
    </StyledContainer>
  )
}

export default Interact
