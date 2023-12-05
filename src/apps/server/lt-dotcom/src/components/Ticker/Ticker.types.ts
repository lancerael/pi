import { Dispatch, SetStateAction } from 'react'
import { TravelTrackerProps } from '../PageHeader/PageHeader.types'

export interface TickerProps {
  isComplete: boolean
  setIsComplete: Dispatch<SetStateAction<boolean>>
  travelTracker: TravelTrackerProps
}
