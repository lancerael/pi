import { useCallback, useEffect, useRef, useState } from 'react'
import { doTransition, useFramerate, useThrottledEvents } from '@pi-lib/utils'
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
import { FPS_CUTOFF, MAX_STARS } from './Stellar.constants'

/**
 * A spacefaring scene that takes you through the stars.
 * React component that renders a starfield animation. Stars can be dynamically
 * added to the scene by mouse movement or clicks. The component also handles screen
 * resizing and star movement over time.
 *
 * @param {StellarProps} props - The props for the Stellar component.
 * @returns {JSX.Element} - A styled starfield animation with interactive star spawning.
 */
export const Stellar = ({
  starCount = 10,
  travelSpeed = 1,
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
  const travelInfo = useRef({ isTravelling, travelSpeed })
  const lastScroll = useRef(0)
  const framerate = useFramerate()

  /**
   * Sets the target coordinates for star movement transition.
   *
   * @param {number} x - The target x-coordinate.
   * @param {number} y - The target y-coordinate.
   * @param {number} speed - The transition speed.
   * @returns {void}
   */
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

  /**
   * Updates the dimensions of the stellar component based on its current client width and height.
   * This function is called when the component is mounted and whenever the window is resized.
   *
   * @returns {void}
   */
  const updateDimensions = useCallback(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    stellarCoords.current.dimensions = [clientWidth, clientHeight]
    setTarget(clientWidth / 2, clientHeight / 2, 50)
  }, [])

  /**
   * Updates the styles of the stars based on their current positions and properties.
   *
   * @returns {void}
   */
  const updateStyles = () => setStars(starTracker.current.map(getStarStyle))

  /**
   * Spawns new stars in the star tracker based on the current scroll position and movement.
   *
   * @param {number} newStarCount - The number of new stars to spawn.
   * @param {Coords} target - The target coordinates for star spawning.
   * @returns {void}
   */
  const spawnStars = useCallback(
    (newStarCount: number = 1, target?: Coords) => {
      const maxIncrease = MAX_STARS - starTracker.current.length
      const isInitialised = travelInfo.current.isTravelling !== null
      if (
        !isInitialised ||
        maxIncrease < 1 ||
        framerate.current.fps < FPS_CUTOFF
      )
        return
      const newStarTotal =
        maxIncrease > newStarCount ? newStarCount : maxIncrease
      starTracker.current.push(
        ...makeStars(
          travelInfo.current.isTravelling ? 1 : -1,
          newStarTotal,
          stellarCoords.current.dimensions,
          target
        )
      )
    },
    []
  )

  /**
   * Handles the scroll event, adjusting star positions and triggering star spawning.
   *
   * @returns {void}
   */
  const handleScroll = useCallback(() => {
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
    if (!travelInfo.current.isTravelling) spawnStars()
    updateDimensions()
    scrollCallback?.(scrollTop)
    updateStyles()
  }, [])

  /**
   * Handles pointer events, updating the target coordinates and spawning stars.
   * We re using both Touch and Mouse rather than Pointer, so we can continue to
   * spawn stars during touch scroll.
   *
   * @param {TouchEvent | MouseEvent} event - The pointer event.
   * @param {boolean} isBurst - Indicates whether it's a burst spawn or not.
   * @returns {void}
   */
  const handlePointer = useCallback(
    (e: TouchEvent | MouseEvent, isBurst: boolean) => {
      if (!e) return
      const clientSource =
        e.type === 'touchmove'
          ? (e as TouchEvent).touches?.[0]
          : (e as MouseEvent)
      const { clientX, clientY } = clientSource
      setTarget(clientX, clientY - 5, 15)
      clearTimeout(moveTimeout.current)
      if (!travelInfo.current.isTravelling) return
      spawnStars(isBurst ? randomNumber(3, 6) : 1, [clientX, clientY - 5])
      moveTimeout.current = setTimeout(() => {
        updateDimensions()
      }, 1000)
    },
    [isTravelling]
  )

  /**
   * Attach the window resize handler
   */
  useThrottledEvents(updateDimensions)

  /**
   * Attach the content scroll handler
   */
  useThrottledEvents(handleScroll, ['scroll'], false, contentRef.current, 100)

  /**
   * Attach the content pointer move handler
   */
  useThrottledEvents((e) => handlePointer(e, false), ['mousemove', 'touchmove'])

  /**
   * Attach the content pointer down handler
   */
  useThrottledEvents((e) => handlePointer(e, true), ['mouseup', 'touchup'])

  /**
   * Set up the animation keyframe that redraws the stars 10x per second,
   * generating new stars in the process
   */
  useEffect(() => {
    if (!stellarRef.current) return
    updateDimensions()
    const keyframe = setInterval(() => {
      if (!starTracker.current.length) {
        spawnStars(starCount)
        updateStyles()
        return
      }
      if (isTravelling) {
        const { dimensions, target } = stellarCoords.current
        spawnStars()
        starTracker.current = starTracker.current
          .map((star: Star) => moveStar(star, target, travelSpeed))
          .filter(({ age, coords }) => filterStars(age, coords, dimensions))
      }
      updateStyles()
    }, 100)
    travelInfo.current = { isTravelling, travelSpeed }
    // stellarRef.current.addEventListener('touchmove', (e) => console.log(e))
    return () => clearInterval(keyframe)
  }, [isTravelling, travelSpeed])

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
