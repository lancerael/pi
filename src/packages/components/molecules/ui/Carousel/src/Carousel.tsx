import { useTouch, useControls, SimpleTouchState } from '@pi-lib/use-touch'
import useLimitedEvents from '@pi-lib/use-limited-events'
import {
  StyledCarousel,
  StyledCarouselInner,
  StyledCarouselItem,
} from './Carousel.style'
import { CarouselProps } from './Carousel.types'
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
  const modifier = useCallback(
    ({ zoom, pan }: SimpleTouchState) => ({
      zoom,
      pan: { x: getLoopedX(pan.x), y: pan.y },
    }),
    []
  )

  /**
   * Start the automatic scroller
   */
  const startScroll = useCallback(() => {
    stopScroll()
    if (!isScroller) return
    isScrolling.current = true
    scrollIntervalRef.current = setInterval(() => {
      const { x, y } = controls.touchStateSignal.value.pan
      controls.setTouchState({
        pan: { x: x - 5 * speed, y },
        modifier,
      })
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
  const getLoopedX = useCallback((x: number) => {
    const iconsWidth = width.current / 2
    if (!iconsWidth) return x
    let newX = x
    if (newX > 0) {
      newX = newX - iconsWidth
    } else if (newX < -iconsWidth) {
      newX = newX + iconsWidth
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
      setTouchState: isDraggable ? controls.setTouchState : () => {},
    },
    modifier,
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

  const { x } = controls.touchStateSignal.value.pan
  const shouldTransition = x < 5 * -speed
  return (
    <StyledCarousel data-testid={dataTestid} {...props}>
      <StyledCarouselInner
        ref={targetRef}
        style={{
          transition:
            isScrolling.current && shouldTransition
              ? 'all 0.25s linear'
              : 'none',
          transform: `translate(${x}px)`,
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
