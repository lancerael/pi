import { useCallback, useEffect, useRef, useState } from 'react'
import { StyledContent, StyledStar, StyledStellar } from './Stellar.style'
import {
  Coords,
  Star,
  StarStyle,
  StellarProps,
  StellarCoords,
} from './Stellar.types'
import {
  filterStars,
  getStarStyle,
  makeStars,
  moveStar,
  randomNumber,
} from './Stellar.helpers'
import { doTransition, useFramerate, useThrottledEvents } from '@pi-lib/utils'
import { FPS_CUTOFF, MAX_STARS } from './Stellar.constants'

/**
 * A spacefaring scene that takes you through the stars.
 * React component that renders a starfield animation. Stars can be dynamically
 * added to the scene by mouse movement or clicks. The component also handles screen
 * resizing and star movement over time.
 *
 * @param {StellarProps} props - The props for the Stellar component.
 * @param {number} props.starCount - Initial number of stars to render.
 * @param {boolean} props.isTravelling - Whether the stars should move.
 * @param {boolean} props.showDebug - Whether to display debug information.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the Stellar component.
 * @returns {JSX.Element} - A styled starfield animation with interactive star spawning.
 */
export const Stellar = ({
  starCount = 10,
  isTravelling = true,
  showDebug = false,
  scrollCallback,
  children,
}: StellarProps) => {
  const [stars, setStars] = useState<StarStyle[]>([])
  const starTracker = useRef<Star[]>([])
  const stellarCoords = useRef<StellarCoords>({
    dimensions: [0, 0],
    target: [0, 0],
  })
  const stellarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const targetTransition = useRef<() => void>()
  const moveTimeout = useRef<NodeJS.Timeout>()
  const lastScroll = useRef(0)
  const framerate = useFramerate()

  const setTarget = (x: number, y: number, speed: number) => {
    targetTransition.current?.()
    targetTransition.current = doTransition({
      values: stellarCoords.current.target,
      targets: [x, y],
      callback: (newTarget) =>
        (stellarCoords.current.target = newTarget as Coords),
      intervalId: `stellarTarget`,
      speed,
    })
  }

  const updateDimensions = useCallback(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    stellarCoords.current.dimensions = [clientWidth, clientHeight]
    setTarget(clientWidth / 2, clientHeight / 2, 50)
  }, [])

  const updateStyles = () => setStars(starTracker.current.map(getStarStyle))

  const scroll = useCallback(() => {
    if (!contentRef.current) return
    const { scrollTop } = contentRef.current
    const offset = (scrollTop - lastScroll.current) / 10
    lastScroll.current = scrollTop
    starTracker.current = starTracker.current.map(
      ({ coords: [left, top], age, ...star }: Star) => {
        return {
          coords: [left, top - offset * age] as Coords,
          age,
          ...star,
        }
      }
    )
    scrollCallback?.(scrollTop)
    updateStyles()
  }, [])

  const starSpawm = useCallback(
    ({ clientX, clientY }: MouseEvent, isBurst: boolean) => {
      setTarget(clientX, clientY - 5, 15)
      clearTimeout(moveTimeout.current)

      if (framerate.current.fps < FPS_CUTOFF) return

      starTracker.current.push(
        ...makeStars(
          isTravelling ? 1 : -1,
          isBurst ? randomNumber(5, 10) : 1,
          stellarCoords.current.dimensions,
          [clientX, clientY - 5]
        )
      )
      moveTimeout.current = setTimeout(() => {
        updateDimensions()
      }, 3000)
    },
    []
  )

  useThrottledEvents(updateDimensions)
  useThrottledEvents(scroll, ['scroll'], false, contentRef.current, 50)
  useThrottledEvents(
    (e) => starSpawm(e, false),
    ['pointermove'],
    false,
    contentRef.current
  )
  useThrottledEvents(
    (e) => starSpawm(e, true),
    ['pointerdown'],
    false,
    contentRef.current
  )

  useEffect(() => {
    if (!stellarRef.current) return
    updateDimensions()
    if (!starTracker.current.length) {
      starTracker.current = makeStars(
        isTravelling ? 0 : -1,
        starCount,
        stellarCoords.current.dimensions
      )
    }
    const keyframe = setInterval(() => {
      if (!starTracker.current.length) return
      const { dimensions, target } = stellarCoords.current
      const { fps } = framerate.current
      if (
        !fps ||
        (fps > FPS_CUTOFF && starTracker.current.length < MAX_STARS)
      ) {
        starTracker.current.push(
          ...makeStars(
            isTravelling ? 0 : -1,
            randomNumber(1, fps > FPS_CUTOFF + 10 ? 2 : 1),
            dimensions
          )
        )
      }
      if (isTravelling) {
        starTracker.current = starTracker.current
          .map((star: Star) => moveStar(star, target))
          .filter(({ age, coords }) => filterStars(age, coords, dimensions))
      }
      updateStyles()
    }, 100)
    return () => clearInterval(keyframe)
  }, [isTravelling])

  return (
    <StyledStellar ref={stellarRef}>
      {showDebug && (
        <div>
          Framerate: {framerate.current.fps}. Total stars: {stars.length}
        </div>
      )}
      {stars.map(({ id, style }) => (
        <StyledStar key={id} {...{ style }} />
      ))}
      <StyledContent ref={contentRef}>{children}</StyledContent>
    </StyledStellar>
  )
}

export default Stellar
