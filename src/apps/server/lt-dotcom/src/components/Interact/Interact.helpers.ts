import { MAX_COUNT } from './Interact.constants'

export const spiralStyle = (
  count: number,
  stepAngle = 0.2,
  stepRadius = 45
) => {
  const angle = -Math.PI / 2 - count * -stepAngle
  const radius = stepRadius * Math.sqrt(count)
  const left = radius * Math.sin(angle)
  const top = radius * Math.cos(angle)

  return {
    opacity: !count ? 0 : 1 - count / 40,
    filter: `blur(${count > 30 ? count - 30 : 0}px)`,
    transform: `translate(${left}px, ${top}px) scale(${1 + count / 100})`,
    display: count > MAX_COUNT ? 'none' : 'flex',
  }
}
