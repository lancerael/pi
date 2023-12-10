'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { signal, useSignalValue } from 'signals-react-safe'
import Stellar from '@pi-lib/stellar'
import PageGrid from '@pi-lib/page-grid'
import Theme, { IS_CLIENT, REDUCED_MOTION } from '@pi-lib/styles'
import {
  HeaderState,
  TravelTrackerProps,
} from '@/components/PageHeader/PageHeader.types'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import Footer from '@/components/Footer'
import Skillset from '@/components/Skillset'
import Highlights from '@/components/Highlights'
import { TechList } from '@/components/TechList/TechList'
import Ticker from '@/components/Ticker'
import Demo from '@/components/Demo'
import useLimitedEvents from '@pi-lib/use-limited-events'

// Using signal for UI sizes to improve performance
const uiSizes = signal({
  fullWidth: 0,
  fullHeight: 0,
})

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [travelTracker, setTravelTracker] = useState<TravelTrackerProps>({
    travelSpeed: 1,
    isTravelling: null,
  })
  const [headerState, setHeaderState] = useState<HeaderState>('hidden')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)
  const uiSizeValues = useSignalValue(uiSizes)

  /**
   * Track the page dimensions on init and resize
   */
  const updateDimensions = useCallback(() => {
    uiSizes.value = {
      fullWidth: widthRef.current?.offsetWidth ?? 0,
      fullHeight: wrapperRef.current?.offsetHeight ?? 0,
    }
  }, [])
  useLimitedEvents(updateDimensions, { doInit: true })

  /**
   * Performant header visibilty toggle
   **/
  const updateHeader = useCallback(
    (scrollTop: number) => {
      let newState: HeaderState = 'dark'
      if (scrollTop <= 24) newState = 'hidden'
      else if (scrollTop > 24 && scrollTop < uiSizes.value.fullHeight - 24)
        newState = 'visible'
      setHeaderState(newState)
    },
    [uiSizes.value.fullHeight]
  )

  /**
   * Initialise the page
   */
  useEffect(() => {
    if (IS_CLIENT) {
      setTravelTracker({ travelSpeed: 1, isTravelling: !REDUCED_MOTION })
      updateDimensions()
    }
  }, [])

  return (
    <Theme themeName="stellar" scheme="dark">
      <div
        style={{
          height: '100vh',
        }}
        ref={wrapperRef}
      >
        <Stellar
          {...travelTracker}
          scrollCallback={(scrollTop) => updateHeader(scrollTop)}
        >
          <PageHeader
            fullWidth={uiSizeValues.fullWidth}
            {...{
              headerState,
              travelTracker,
              setTravelTracker,
              isComplete,
            }}
          />
          <PageGrid>
            {/* <TestComponent>HELLO</TestComponent> */}
            <Ticker
              {...{ headerState, isComplete, setIsComplete, travelTracker }}
            />
            <Skillset />
            <TechList {...travelTracker} />
            <Highlights />
            <Demo />
            <Footer />
          </PageGrid>
          <div ref={widthRef}></div>
        </Stellar>
      </div>
    </Theme>
  )
}
