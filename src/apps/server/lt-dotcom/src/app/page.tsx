'use client'
import { useRef, useState } from 'react'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'
import PageGrid from '@pi-lib/page-grid'
import Card from '@pi-lib/card'
import { useThrottledEvents } from '@pi-lib/utils'
import Interact from '@/components/Interact'
import { tickerLines } from '@/data/tickerLines'
import { careerHighlights } from '@/data/careerHighlights'
import { skillset } from '@/data/skillset'
import {
  ShimmerInner,
  ShimmerOuter,
  StyledCardWrapper,
  StyledFullGradient,
} from './page.styles'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import {
  TravelTrackerProps,
  UiTrackerProps,
} from '@/components/PageHeader/PageHeader.types'

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [uiTracker, setUiTracker] = useState<UiTrackerProps>({
    scrollTop: 0,
    fullWidth: 0,
  })
  const [travelTracker, setTravelTracker] = useState<TravelTrackerProps>({
    travelSpeed: 1,
    isTravelling: true,
  })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)

  useThrottledEvents(() => {
    setUiTracker(({ scrollTop }) => ({
      scrollTop,
      fullWidth: widthRef.current?.offsetWidth ?? 0,
    }))
  })

  return (
    <div
      style={{
        height: '100vh',
      }}
      ref={wrapperRef}
    >
      <Stellar
        {...travelTracker}
        scrollCallback={(scrollTop) =>
          setUiTracker(({ fullWidth }) => ({ fullWidth, scrollTop }))
        }
      >
        <PageHeader
          {...{ uiTracker, travelTracker, setTravelTracker, isComplete }}
        />
        <PageGrid>
          <ShimmerOuter className="is-title">
            {isComplete && <Interact />}
            <ShimmerInner>
              <Shimmer
                lines={tickerLines}
                behaviour="fade"
                delay={2000}
                holdFirst={4000}
                fadeTime={800}
                pause={2500}
                callback={() => setIsComplete(true)}
              />
            </ShimmerInner>
          </ShimmerOuter>
          <div style={{ margin: '1rem' }}>
            <Grid>
              {skillset.map(({ title, subTitle, icon, summary, bullets }) => (
                <StyledCardWrapper>
                  <Card
                    key={title}
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
          </div>
          <StyledFullGradient className="pi-page-grid-full">
            <div>Something 1</div>
            <div>Something 2</div>
            <div>Something 3</div>
          </StyledFullGradient>
          <div style={{ margin: '1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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

          <StyledFullGradient className="pi-page-grid-full">
            <Grid>
              <div>Something 1</div>
              <div>Something 2</div>
              <div>Something 3</div>
            </Grid>
          </StyledFullGradient>
        </PageGrid>
        <div ref={widthRef}></div>
      </Stellar>
    </div>
  )
}
