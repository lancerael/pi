'use client'
import { ReactElement, useEffect, useRef, useState } from 'react'
import Stellar, { TravelTrackerProps } from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'
import PageGrid from '@pi-lib/page-grid'
import Card from '@pi-lib/card'
import Carousel from '@pi-lib/carousel'
import IconButton from '@pi-lib/icon-button'
import { useThrottledEvents } from '@pi-lib/use-throttled-events'
import { IS_CLIENT, REDUCED_MOTION } from '@pi-lib/styles'
import { ICONS } from '@pi-lib/constants'
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
} from './page.styles'
import { UiTrackerProps } from '@/components/PageHeader/PageHeader.types'
import { PageHeader } from '@/components/PageHeader/PageHeader'

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [uiTracker, setUiTracker] = useState<UiTrackerProps>({
    scrollTop: 0,
    fullWidth: 0,
    fullHeight: 0,
  })
  const [travelTracker, setTravelTracker] = useState<TravelTrackerProps>({
    travelSpeed: 1,
    isTravelling: null,
    dimmer: 0,
  })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)

  useThrottledEvents(() => {
    setUiTracker((uiTracker) => ({
      ...uiTracker,
      fullWidth: widthRef.current?.offsetWidth ?? 0,
      fullHeight: wrapperRef.current?.offsetHeight ?? 0,
    }))
  })

  useEffect(() => {
    if (IS_CLIENT) {
      setTravelTracker({ travelSpeed: 1, isTravelling: !REDUCED_MOTION })
    }
  }, [])

  const getShimmerTimes = () => {
    const { travelSpeed = 1, isTravelling } = travelTracker
    return {
      delay: 2000,
      holdFirst: isTravelling ? 4000 / travelSpeed : 100000,
      fadeTime: isTravelling ? 800 / travelSpeed : 0,
      pause: isTravelling ? 2500 / travelSpeed : 100000,
    }
  }

  const techList = Object.entries(ICONS)
    .map(([title, href], i) => {
      const src = `https://d3bjzq1zo2el1w.cloudfront.net/${title
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
    .filter(Boolean) as ReactElement[]

  return (
    <div
      style={{
        height: '100vh',
      }}
      ref={wrapperRef}
    >
      <Stellar
        {...{ ...travelTracker }}
        scrollCallback={(scrollTop) =>
          setUiTracker(({ fullHeight, fullWidth }) => {
            const dimmer =
              scrollTop > fullHeight
                ? 0.33
                : ((100 / fullHeight) * scrollTop) / 300
            setTravelTracker((travelTracker) => ({ ...travelTracker, dimmer }))
            return { fullHeight, fullWidth, scrollTop }
          })
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
                {...getShimmerTimes()}
                callback={() => setIsComplete(true)}
              />
            </ShimmerInner>
          </ShimmerOuter>
          <SkillsContainer
            dimmer={(travelTracker.dimmer ?? 0) / 2}
            className="pi-page-grid-full"
          >
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
            <Carousel
              itemList={techList}
              speed={travelTracker.travelSpeed}
              isScroller={!!travelTracker.isTravelling}
            />
          </StyledFullGradient>
          <div style={{ margin: '1rem 0' }}>
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
