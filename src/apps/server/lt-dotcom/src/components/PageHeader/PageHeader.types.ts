import { BaseProps, TransientProps } from '@pi-lib/styles'
import { StellarProps } from '@pi-lib/stellar'
import { PropsWithChildren } from 'react'

export interface UiTrackerProps extends BaseProps {
  fullWidth: number
  fullHeight: number
}

export type TravelTrackerProps = Pick<
  StellarProps,
  'travelSpeed' | 'isTravelling'
>

export interface PageHeaderProps {
  fullWidth: number
  headerState: HeaderState
  travelTracker: TravelTrackerProps
  setTravelTracker: (newTracker: TravelTrackerProps) => void
  isComplete: boolean
}

export type StyledHeaderProps = PropsWithChildren &
  TransientProps<
    Pick<PageHeaderProps, 'fullWidth' | 'isComplete' | 'headerState'>
  >

export type HeaderState = 'hidden' | 'visible' | 'dark'
