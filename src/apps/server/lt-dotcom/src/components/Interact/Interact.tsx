import Image from 'next/image'
import { useEffect, useState } from 'react'
import { StyledContainer } from './Interact.styles'
import { spiralStyle } from './Interact.helpers'
import { MAX_COUNT } from './Interact.constants'

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
        isAlt: [20, 21, 22, 35, 36, 37].includes(count),
      })
      if (count > MAX_COUNT) clearInterval(altInterval)
    }, 100)
    return () => clearInterval(altInterval)
  }, [])

  return (
    <StyledContainer style={{ ...tracker.styles }}>
      <Image
        style={{ opacity: '0.9', marginTop: `${tracker.isAlt ? -4 : 0}px` }}
        src={`/hand${tracker.isAlt ? '2' : ''}.svg`}
        alt="Interaction"
        width={36}
        height={36}
      />
    </StyledContainer>
  )
}

export default Interact
