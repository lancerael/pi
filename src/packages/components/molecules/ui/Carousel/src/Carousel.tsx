import { useTouch, useControls, PanLevel } from '@pi-lib/use-touch'
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
  const isScrolling = useRef(true)
  const controls = useControls()

  /**
   * Enhance the pan controls to allow a smooth loop
   */
  const setPanLevel = useCallback(
    (update: (panLevel: PanLevel) => PanLevel) => {
      controls.setPanLevel(({ x, y }) => {
        const width = (targetRef.current?.offsetWidth ?? 0) / 2
        if (!width) return { x, y }
        let newX = x
        if (newX > 0) {
          newX -= width
        } else if (newX < -width) {
          newX = 0
        }
        // When scrolling, disable scroll to reset loop
        if (newX !== x && isScrolling.current) {
          setTimeout(() => {
            stopScroll()
            requestAnimationFrame(() => {
              controls.setPanLevel({ x: newX, y })
              requestAnimationFrame(() => {
                startScroll()
              })
            })
          }, 230)
        }
        // Otherwise if dragging, just update the value
        return update({ x: isScrolling.current ? x : newX, y })
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
      setPanLevel(({ x, y }) => ({ x: x - 5 * speed, y }))
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
   * Attach the touch handlers to the controls
   */
  useTouch<HTMLUListElement>({
    targetRef,
    controls: {
      ...controls,
      setPanLevel: (isDraggable ? setPanLevel : () => {}) as CustomPanHandler,
    },
    resetCallback: isDraggable ? stopScroll : undefined,
    stopCallback: isDraggable ? startScrollDelayed : undefined,
  })

  /**
   * Init the scroller
   */
  useEffect(startScroll, [isScroller, isDraggable, speed])

  return (
    <StyledCarousel data-testid={dataTestid} {...props}>
      <StyledCarouselInner
        ref={targetRef}
        style={{
          transition: isScrolling.current ? 'all 0.25s linear' : 'none',
          transform: `translate(${controls.panLevel.x}px)`,
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
