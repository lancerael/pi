import {
  StyledCircle,
  StyledParticleBackground,
} from './ParticleBackground.style'
import { useEffect, useRef, useState } from 'react'

import Manager from '@pi-lib/particles'
import { ParticleBackgroundProps } from './ParticleBackground.types'

/**
 * ParticleBackground
 *
 * @param {InputProps} props - The properties for the ParticleBackground component.
 * @returns {JSX.Element} an instance of the the ParticleBackground component.
 */
export const ParticleBackground = ({
  dataTestid = 'pi-lib-particle-background',
  ...props
}: ParticleBackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const particleManager = useRef<Manager>()
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!backgroundRef.current) return
    particleManager.current = new Manager({
      count: 100,
      config: {
        isParallax: true,
        // isMouseRepelled: true,
        // isCenterRepelled: true,
        // isWallReflected: true,
        // isRecycled: false,
        // isDistantSpawn: true,
        speed: 1000,
      },
    })
  }, [backgroundRef.current])

  useEffect(() => {
    const tickerTimer = setInterval(() => {
      particleManager.current?.moveParticles()
      setAge((oldAge) => oldAge + 1)
    }, 100)
    return () => clearInterval(tickerTimer)
  }, [])

  // console.log(particleManager.current?.particles)

  return (
    <StyledParticleBackground data-testid={dataTestid} ref={backgroundRef}>
      {particleManager.current?.particles?.map(
        ({ x: left, y: top, z, age, isDead }, i) => {
          const dimmer = 0
          return (
            <StyledCircle
              key={i}
              style={{
                left,
                top,
                width: z,
                height: z,
                display: isDead ? 'none' : 'block',
                opacity: z >= 1 && age > 3 ? 1 - z / 20 - dimmer : 0,
                color: 'white',
              }}
            >
              {/* {age} */}
            </StyledCircle>
          )
        }
      )}
      {/* </svg> */}
    </StyledParticleBackground>
  )
}

export default ParticleBackground
