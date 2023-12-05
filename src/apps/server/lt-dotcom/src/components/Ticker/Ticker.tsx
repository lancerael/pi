import { ShimmerInner, ShimmerOuter } from './Ticker.style'
import Interact from '../Interact'
import Shimmer from '@pi-lib/shimmer'
import { tickerLines } from '@/data/tickerLines'
import { TickerProps } from './Ticker.types'
import { TravelTrackerProps } from '../PageHeader/PageHeader.types'

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
}: TickerProps) => {
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
    </ShimmerOuter>
  )
}

export default Ticker
