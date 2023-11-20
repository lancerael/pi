import { BaseProps, TransientProps } from '@pi-lib/utils'
import { TravelTrackerProps } from '@pi-lib/stellar'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export interface UiTrackerProps extends BaseProps {
  fullWidth: number
  fullHeight: number
  scrollTop: number
}

export interface PageHeaderProps {
  uiTracker: UiTrackerProps
  travelTracker: TravelTrackerProps
  setTravelTracker: Dispatch<SetStateAction<TravelTrackerProps>>
  isComplete: boolean
}

export type StyledHeaderProps = PropsWithChildren &
  TransientProps<UiTrackerProps & Pick<PageHeaderProps, 'isComplete'>>
