'use client'
import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { signal, useSignalValue } from 'signals-react-safe'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'
import PageGrid from '@pi-lib/page-grid'
import Card from '@pi-lib/card'
import Carousel from '@pi-lib/carousel'
import IconButton from '@pi-lib/icon-button'
import { useThrottledEvents } from '@pi-lib/use-throttled-events'
import { IS_CLIENT, REDUCED_MOTION } from '@pi-lib/styles'
import { ICONS_EXTENDED } from '@pi-lib/constants'
import Interact from '@/components/Interact'
import { tickerLines } from '@/data/tickerLines'
import { careerHighlights } from '@/data/careerHighlights'
import { skillset } from '@/data/skillset'
import {
  ShimmerInner,
  ShimmerOuter,
  SkillsContainer,
  StyledCardWrapper,
  StyledFullGradient,
} from './page.style'
import {
  HeaderState,
  TravelTrackerProps,
} from '@/components/PageHeader/PageHeader.types'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import Footer from '@/components/Footer'

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
  useThrottledEvents(updateDimensions)

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
   * Get the shimmer times based on user preferences
   */
  const getShimmerTimes = useCallback(() => {
    const { travelSpeed = 1, isTravelling } = travelTracker
    return {
      delay: 2000,
      holdFirst: isTravelling ? 4000 / travelSpeed : 100000,
      fadeTime: isTravelling ? 800 / travelSpeed : 0,
      pause: isTravelling ? 2500 / travelSpeed : 100000,
    }
  }, [travelTracker])

  /**
   * Get an array of icons for the tech list
   */
  const techList = useMemo(
    () =>
      Object.entries(ICONS_EXTENDED)
        .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
        .map(([title, href], i) => {
          const src = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}${title
            .split(' ')
            .join('-')
            .toLowerCase()}.svg`
          return (
            !!title && (
              <IconButton
                key={title}
                iconProps={{ height: '2rem' }}
                isExternal
                {...{ src, href, title }}
              />
            )
          )
        })
        .filter(Boolean) as ReactElement[],
    []
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
          <ShimmerOuter className="is-title">
            {isComplete && <Interact />}
            <ShimmerInner>
              <Shimmer
                lines={tickerLines}
                behaviour="fade"
                {...getShimmerTimes()}
                callback={() => setIsComplete(true)}
              />
            </ShimmerInner>
          </ShimmerOuter>
          <SkillsContainer>
            <Grid>
              {skillset.map(({ title, subTitle, icon, summary, bullets }) => (
                <StyledCardWrapper key={title}>
                  <Card
                    {...{ title, subTitle }}
                    iconProps={{
                      src: `/${icon}.svg`,
                      color: 'var(--outline)',
                      isStroked: true,
                    }}
                    isClear
                  >
                    {summary}
                    <ul
                      style={{
                        padding: '1rem 1rem 0',
                        color: 'var(--textSoft)',
                      }}
                    >
                      {bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </Card>
                </StyledCardWrapper>
              ))}
            </Grid>
          </SkillsContainer>
          <StyledFullGradient className="pi-page-grid-full">
            <div style={{ margin: '1rem 0' }}>
              <Carousel
                itemList={techList}
                speed={travelTracker.travelSpeed}
                isScroller={!!travelTracker.isTravelling}
              />
            </div>
          </StyledFullGradient>
          <div style={{ margin: '3rem 0 5rem' }}>
            <div
              className="is-title"
              style={{ textAlign: 'center', margin: '2rem' }}
            >
              <Shimmer
                lines={['Career Highlights']}
                behaviour="linger"
                delay={0}
              />
            </div>
            <Grid>
              {careerHighlights.map(({ title, subTitle, summary, bullets }) => (
                <Card key={title} {...{ title, subTitle }}>
                  {summary}
                  <ul
                    style={{ padding: '1rem 1rem 0', color: 'var(--textSoft)' }}
                  >
                    {bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </Grid>
          </div>

          <Footer />
        </PageGrid>
        <div ref={widthRef}></div>
      </Stellar>
    </div>
  )
}
