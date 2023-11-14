import { BaseProps, TransientProps } from '@pi-lib/utils'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export interface TravelTrackerProps {
  travelSpeed: number
  isTravelling: boolean
}

export interface UiTrackerProps extends BaseProps {
  fullWidth: number
  scrollTop: number
}

export interface PageHeaderProps {
  uiTracker: UiTrackerProps
  travelTracker: TravelTrackerProps
  setTravelTracker: Dispatch<SetStateAction<TravelTrackerProps>>
}

export type StyledHeaderProps = PropsWithChildren &
  TransientProps<UiTrackerProps>
