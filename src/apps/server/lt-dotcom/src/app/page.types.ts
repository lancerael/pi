import {
  HeaderState,
  TravelTrackerProps,
} from '@/components/PageHeader/PageHeader.types'

export interface PageState {
  uiSizes: {
    fullWidth: number
    fullHeight: number
  }
  isComplete: boolean
  travelTracker: TravelTrackerProps
  headerState: HeaderState
}
