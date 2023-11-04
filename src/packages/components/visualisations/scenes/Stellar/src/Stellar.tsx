import { memo, useCallback, useEffect, useRef, useState } from 'react'
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
import { useFramerate, useThrottledEvents } from '@pi-lib/utils'
import { FPS_CUTOFF } from './Stellar.constants'

/**
 * A spacefaring scene that takes you through the stars.
 */
export const Stellar = memo(
  ({
    starCount = 10,
    isTravelling = true,
    showDebug = false,
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
    const moveTimeout = useRef<NodeJS.Timeout>()
    const lastScroll = useRef(0)
    const framerate = useFramerate()

    const updateDimensions = useCallback(() => {
      if (!stellarRef.current) return
      const { clientWidth, clientHeight } = stellarRef.current
      stellarCoords.current = {
        dimensions: [clientWidth, clientHeight],
        target: [clientWidth / 2, clientHeight / 2],
      }
    }, [])

    const scroll = useCallback(() => {
      if (!contentRef.current) return
      const offset = (contentRef.current.scrollTop - lastScroll.current) / 10
      lastScroll.current = contentRef.current.scrollTop
      starTracker.current = starTracker.current.map(
        ({ coords: [left, top], age, ...star }: Star) => {
          return {
            coords: [left, top - offset * (age / 2)] as Coords,
            age,
            ...star,
          }
        }
      )
    }, [])

    const starSpawm = useCallback(
      ({ clientX, clientY }: MouseEvent, isBurst: boolean) => {
        stellarCoords.current.target = [clientX, clientY]
        clearTimeout(moveTimeout.current)

        if (framerate.current.fps < FPS_CUTOFF) return

        starTracker.current.push(
          ...makeStars(
            isBurst ? randomNumber(1, 5) : 1,
            stellarCoords.current.dimensions,
            stellarCoords.current.target
          )
        )
        moveTimeout.current = setTimeout(() => {
          updateDimensions()
        }, 3000)
      },
      []
    )

    useThrottledEvents(updateDimensions)
    useThrottledEvents(scroll, ['scroll'], false, contentRef.current)
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
          starCount,
          stellarCoords.current.dimensions
        )
      }
      const keyframe = setInterval(() => {
        if (!starTracker.current.length) return
        const { dimensions, target } = stellarCoords.current
        const { fps } = framerate.current
        if (!fps || (fps > FPS_CUTOFF && isTravelling)) {
          starTracker.current.push(
            ...makeStars(
              randomNumber(1, fps > FPS_CUTOFF + 10 ? 2 : 1),
              dimensions
            )
          )
        }
        setStars(starTracker.current.map(getStarStyle))
        if (isTravelling) {
          starTracker.current = starTracker.current
            .map((star: Star) => moveStar(star, target))
            .filter(({ age, coords }) => filterStars(age, coords, dimensions))
        }
      }, 200)
      return () => clearInterval(keyframe)
    }, [stellarRef.current, isTravelling])

    return (
      <StyledStellar ref={stellarRef}>
        {showDebug &&
          `Framerate: ${framerate.current.fps}. Total stars: ${stars.length}`}
        {stars.map(({ id, style }) => (
          <StyledStar key={id} {...{ style }} />
        ))}
        <StyledContent ref={contentRef}>{children}</StyledContent>
      </StyledStellar>
    )
  }
)

export default Stellar
