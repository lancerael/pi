import Image from 'next/image'
import { useEffect, useState } from 'react'

const spiralPosition = (count: number, stepAngle = 0.2, stepRadius = 85) => {
  const angle = count * stepAngle
  const radius = stepRadius * Math.sqrt(count)
  const left = radius * Math.cos(angle)
  const top = radius * Math.sin(angle)

  return {
    opacity: !count ? 0 : 1 - count / 40,
    filter: `blur(${count > 30 ? count - 30 : 0}px)`,
    transform: `translate(${left}px, ${top}px) scale(${1 + count / 100})`,
  }
}

export const Interact = () => {
  const [styles, setStyles] = useState(spiralPosition(0))
  const [isAlt, setIsAlt] = useState(false)

  useEffect(() => {
    let count = 0
    const altInterval = setInterval(() => {
      setStyles(spiralPosition(count))
      setIsAlt((oldIsAlt) => (!(count % 16) ? !oldIsAlt : oldIsAlt))
      count++
      if (count > 100) clearInterval(altInterval)
    }, 100)
    return () => clearInterval(altInterval)
  }, [])

  return (
    <div
      style={{
        transition: 'all 1s linear',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
        position: 'absolute',
        ...styles,
      }}
    >
      <Image
        style={{ opacity: '0.9' }}
        src={`/hand${isAlt ? '2' : ''}.svg`}
        alt="Interaction"
        width={36}
        height={36}
      />
    </div>
  )
}

export default Interact
