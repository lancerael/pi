import {
  useTouch,
  useControls,
  TouchControls,
  PanLevel,
} from '@pi-lib/use-touch'
import {
  StyledCarousel,
  StyledCarouselInner,
  StyledCarouselItem,
} from './Carousel.style'
import { CarouselProps } from './Carousel.types'
import { useEffect, useRef, useState } from 'react'

/**
 * Carousel
 *
 * @param {InputProps} props - The properties for the Carousel component.
 * @returns {JSX.Element} an instance of the the Carousel component.
 */
export const Carousel = ({
  dataTestid = 'pi-lib-carousel',
  itemList,
  ...props
}: CarouselProps) => {
  const targetRef = useRef<HTMLUListElement>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout>()
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const [isScrolling, setIsScrolling] = useState(false)
  const controls = useControls()

  const customControls: TouchControls = {
    ...controls,
    setPanLevel: ((update: (panLevel: PanLevel) => PanLevel) => {
      controls.setPanLevel(({ x, y }) => {
        const width = (targetRef.current?.offsetWidth ?? 0) / 2
        if (!width) return { x, y }
        let newX = x
        if (newX > 0) {
          newX -= width
        } else if (newX < -width) {
          newX = 0
        }
        return update({ x: newX, y })
      })
    }) as React.Dispatch<React.SetStateAction<PanLevel>>,
  }

  const startScroll = () => {
    setIsScrolling(true)
    clearTimeout(scrollTimeoutRef.current)
    scrollIntervalRef.current = setInterval(() => {
      customControls.setPanLevel(({ x, y }) => ({ x: x - 5, y }))
    }, 250)
    return stopScroll
  }

  const stopScroll = () => {
    setIsScrolling(false)
    clearInterval(scrollIntervalRef.current)
    clearTimeout(scrollTimeoutRef.current)
  }

  /**
   * Adding a timeout to allow for swipe transition
   */
  const startScrollDelayed = () => {
    scrollTimeoutRef.current = setTimeout(startScroll, 1000)
  }

  useTouch<HTMLUListElement>({
    targetRef,
    controls: customControls,
    resetCallback: stopScroll,
    stopCallback: startScrollDelayed,
  })

  useEffect(startScroll, [])

  return (
    <StyledCarousel data-testid={dataTestid} {...props}>
      <StyledCarouselInner
        ref={targetRef}
        style={{
          transition: isScrolling ? 'all 0.25s linear' : 'none',
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
