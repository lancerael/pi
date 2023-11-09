import { MAX_COUNT } from './Interact.constants'

export const spiralStyle = (
  count: number,
  stepAngle = 0.2,
  stepRadius = 45
) => {
  const angle = count * stepAngle
  const radius = stepRadius * Math.sqrt(count)
  const left = radius * Math.cos(angle)
  const top = radius * Math.sin(angle)

  return {
    opacity: !count ? 0 : 1 - count / 40,
    filter: `blur(${count > 30 ? count - 30 : 0}px)`,
    transform: `translate(${left}px, ${top}px) scale(${1 + count / 100})`,
    display: count > MAX_COUNT ? 'none' : 'flex',
  }
}
