import {
  ShimmerInner,
  ShimmerOuter,
  StyledChevron,
  StyledChevronInner,
} from './Ticker.style'
import Interact from '../Interact'
import Shimmer from '@pi-lib/shimmer'
import Icon from '@pi-lib/icon'
import { tickerLines } from '@/data/tickerLines'
import { TickerProps } from './Ticker.types'
import { TravelTrackerProps } from '../PageHeader/PageHeader.types'
import { useState } from 'react'
import useLimitedEvents from '@pi-lib/use-limited-events'

/**
 * Get the shimmer times based on user preferences
 */
const getShimmerTimes = ({
  travelSpeed = 1,
  isTravelling = false,
}: TravelTrackerProps) => {
  return {
    delay: 2000,
    holdFirst: isTravelling ? 4000 / travelSpeed : 100000,
    fadeTime: isTravelling ? 800 / travelSpeed : 0,
    pause: isTravelling ? 2500 / travelSpeed : 100000,
  }
}

export const Ticker = ({
  isComplete,
  setIsComplete,
  travelTracker,
  headerState,
}: TickerProps) => {
  const [isChevronVisible, setIsChevronVisible] = useState(false)
  useLimitedEvents(() => setIsChevronVisible(true), {
    events: ['click', 'mousemove'],
    type: 'debounce',
    timeout: 2500,
    isActive: !isChevronVisible,
  })
  return (
    <ShimmerOuter className="is-title">
      {isComplete && <Interact />}
      <ShimmerInner>
        <Shimmer
          lines={tickerLines}
          behaviour="fade"
          {...getShimmerTimes(travelTracker)}
          callback={() => setIsComplete(true)}
        />
      </ShimmerInner>
      <StyledChevron
        id="skills"
        $isVisible={isChevronVisible && headerState === 'hidden'}
      >
        <StyledChevronInner href="#skills" title="Scroll down">
          <Icon iconName="Chevron" />
        </StyledChevronInner>
      </StyledChevron>
    </ShimmerOuter>
  )
}

export default Ticker
