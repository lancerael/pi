import { useTouch, useControls, TouchState } from '@pi-lib/use-touch'
import useLimitedEvents from '@pi-lib/use-limited-events'
import {
  StyledCarousel,
  StyledCarouselInner,
  StyledCarouselItem,
} from './Carousel.style'
import { CarouselProps, CustomPanHandler } from './Carousel.types'
import { useCallback, useEffect, useRef } from 'react'

/**
 * Carousel
 *
 * @param {InputProps} props - The properties for the Carousel component.
 * @returns {JSX.Element} an instance of the the Carousel component.
 */
export const Carousel = ({
  dataTestid = 'pi-lib-carousel',
  isDraggable = true,
  isScroller = true,
  speed = 1,
  itemList,
  ...props
}: CarouselProps) => {
  const targetRef = useRef<HTMLUListElement>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout>()
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const width = useRef(0)
  const isScrolling = useRef(true)
  const controls = useControls()

  /**
   * Enhance the pan controls to allow a smooth loop
   */
  const setTouchState = useCallback(
    (update: (touchState: TouchState) => TouchState) => {
      controls.setTouchState(({ zoom, pan: { x, y } }) => {
        return update({ zoom, pan: { x: getLoopedX(x), y } })
      })
    },
    [isScroller, isDraggable, speed]
  )

  /**
   * Start the automatic scroller
   */
  const startScroll = useCallback(() => {
    stopScroll()
    if (!isScroller) return
    isScrolling.current = true
    scrollIntervalRef.current = setInterval(() => {
      setTouchState(({ zoom, pan: { x, y } }) => ({
        zoom,
        pan: { x: x - 5 * speed, y },
      }))
    }, 250)
    return stopScroll
  }, [isScroller, isDraggable, speed])

  /**
   * Stop and cleanup the auto scroller
   */
  const stopScroll = useCallback(() => {
    isScrolling.current = false
    clearInterval(scrollIntervalRef.current)
    clearTimeout(scrollTimeoutRef.current)
  }, [isScroller, isDraggable, speed])

  /**
   * Adding a timeout to allow for swipe transition
   */
  const startScrollDelayed = useCallback(() => {
    scrollTimeoutRef.current = setTimeout(startScroll, 1000)
  }, [isScroller, isDraggable, speed])

  /**
   * Get the correct looped version of the x scroll value
   */
  const getLoopedX = useCallback((x: number, isTemp?: boolean) => {
    const iconsWidth = width.current / 2
    if (!iconsWidth) return x
    let newX = x
    if (newX > 0) {
      newX = isTemp ? -iconsWidth : newX - iconsWidth
    } else if (newX < -iconsWidth) {
      newX = isTemp ? 0 : newX + iconsWidth
    }
    return newX
  }, [])

  /**
   * Attach the touch handlers to the controls
   */
  useTouch<HTMLUListElement>({
    targetRef,
    controls: {
      ...controls,
      setTouchState: (isDraggable
        ? setTouchState
        : () => {}) as CustomPanHandler,
    },
    resetCallback: isDraggable ? stopScroll : undefined,
    stopCallback: isDraggable ? startScrollDelayed : undefined,
  })

  /**
   * Keep width up to date
   */
  useLimitedEvents(
    () => (width.current = targetRef.current?.offsetWidth ?? 0),
    { doInit: true },
    [targetRef.current]
  )

  /**
   * Init the scroller
   */
  useEffect(startScroll, [isScroller, isDraggable, speed])

  /**
   * Make sure there is no looping animation
   */
  const loopedX = getLoopedX(controls.touchState.pan.x, isScrolling.current)
  const shouldTransition = loopedX !== 0 && loopedX !== width.current / -2
  return (
    <StyledCarousel data-testid={dataTestid} {...props}>
      <StyledCarouselInner
        ref={targetRef}
        style={{
          transition:
            isScrolling.current && shouldTransition
              ? 'all 0.25s linear'
              : 'none',
          transform: `translate(${getLoopedX(loopedX)}px)`,
        }}
      >
        {[...itemList, ...itemList].map((item, i) => (
          <StyledCarouselItem key={i}>{item}</StyledCarouselItem>
        ))}
      </StyledCarouselInner>
    </StyledCarousel>
  )
}

export default Carousel
