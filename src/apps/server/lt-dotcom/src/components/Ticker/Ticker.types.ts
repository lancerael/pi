import { HeaderState, TravelTrackerProps } from '../PageHeader/PageHeader.types'

export interface TickerProps {
  isComplete: boolean
  setIsComplete: (newIsComplete: boolean) => void
  travelTracker: TravelTrackerProps
  headerState: HeaderState
}
