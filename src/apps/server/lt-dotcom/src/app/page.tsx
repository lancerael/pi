'use client'
import { useCallback, useEffect, useRef } from 'react'
import { useSignalValue } from 'signals-react-safe'
import Stellar from '@pi-lib/stellar'
import PageGrid from '@pi-lib/page-grid'
import Theme, { IS_CLIENT, REDUCED_MOTION } from '@pi-lib/styles'
import { HeaderState } from '@/components/PageHeader/PageHeader.types'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import Footer from '@/components/Footer'
import Skillset from '@/components/Skillset'
import Highlights from '@/components/Highlights'
import { TechList } from '@/components/TechList/TechList'
import Ticker from '@/components/Ticker'
import Demo from '@/components/Demo'
import useLimitedEvents from '@pi-lib/use-limited-events'
import { pageState, setState } from './page.state'

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)
  const { headerState, isComplete, travelTracker, uiSizes } =
    useSignalValue(pageState)

  /**
   * Track the page dimensions on init and resize
   */
  const updateDimensions = useCallback(() => {
    setState('uiSizes', {
      fullWidth: widthRef.current?.offsetWidth ?? 0,
      fullHeight: wrapperRef.current?.offsetHeight ?? 0,
    })
  }, [])
  useLimitedEvents(updateDimensions, { doInit: true })

  /**
   * Performant header visibilty toggle
   **/
  const updateHeader = useCallback((scrollTop: number) => {
    let newState: HeaderState = 'dark'
    if (scrollTop <= 24) newState = 'hidden'
    else if (
      scrollTop > 24 &&
      scrollTop < pageState.value.uiSizes.fullHeight - 24
    ) {
      newState = 'visible'
    }
    setState('headerState', newState)
  }, [])

  /**
   * Initialise the page
   */
  useEffect(() => {
    if (IS_CLIENT) {
      setState('travelTracker', {
        travelSpeed: 1,
        isTravelling: !REDUCED_MOTION,
      })
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
          isAutoDimmed
        >
          <PageHeader
            fullWidth={uiSizes.fullWidth}
            setTravelTracker={(newTracker) =>
              setState('travelTracker', newTracker)
            }
            {...{ headerState, isComplete, travelTracker }}
          />
          <PageGrid>
            <span id="top" />
            <Ticker
              setIsComplete={(newIsComplete) =>
                setState('isComplete', newIsComplete)
              }
              {...{ headerState, isComplete, travelTracker }}
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
