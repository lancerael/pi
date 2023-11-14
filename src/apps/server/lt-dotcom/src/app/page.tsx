'use client'
import { CSSProperties, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { gradient } from '@pi-lib/styles'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'
import PageGrid from '@pi-lib/page-grid'
import Banner from '@pi-lib/banner'
import Card from '@pi-lib/card'
import IconButton from '@pi-lib/icon-button'
import { getTransientProps, useThrottledEvents } from '@pi-lib/utils'
import Interact from '@/components/Interact'
import { tickerLines } from '@/data/tickerLines'
import { careerHighlights } from '@/data/careerHighlights'
import { skillset } from '@/data/skillset'

const StyledFullGradient = styled.div`
  ${gradient({ isTransparent: true })}
  margin: 5rem 0;
  padding: 5rem 1rem;
`

const StyledHeader = styled.div<StyledHeaderProps>(
  ({ $fullWidth, $isShimmerAtLimit }) => css`
    position: fixed;
    opacity: ${$isShimmerAtLimit ? 1 : 0};
    width: ${$fullWidth ? `${$fullWidth}px` : '100%'};
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0;
    top: -1rem;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(4px);
  `
)

const ShimmerOuter = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  display: flex;
`

interface StyledHeaderProps {
  $fullWidth: number
  $isShimmerAtLimit: boolean
}

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [fullWidth, setFullWidth] = useState(0)
  const [isTravelling, setIsTravelling] = useState(true)
  const [travelSpeed, setTravelSpeed] = useState(1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)

  const scrollGap = 128
  const isShimmerAtLimit =
    wrapperRef.current &&
    scrollTop > (wrapperRef.current?.offsetHeight ?? 0) / 2 - scrollGap

  const getShimmerOuterStyle = (): CSSProperties => {
    return {
      position: isShimmerAtLimit ? 'absolute' : 'fixed',
      top: isShimmerAtLimit ? `calc(100vh - ${scrollGap + 18}px)` : undefined,
      transition: 'none',
    }
  }

  useThrottledEvents(() => setFullWidth(widthRef.current?.offsetWidth ?? 0))

  return (
    <div
      style={{
        height: '100vh',
        fontFamily: 'optima, sans-serif',
      }}
      ref={wrapperRef}
    >
      <Stellar {...{ isTravelling, travelSpeed }} scrollCallback={setScrollTop}>
        <StyledHeader
          {...(getTransientProps({
            fullWidth,
            isShimmerAtLimit,
          }) as StyledHeaderProps)}
        >
          <PageGrid>
            <Banner $useBackground={false}>
              <div
                style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}
              >
                <IconButton
                  src="/cube.svg"
                  title="Lance Taylor"
                  size="3rem"
                  $isStroked
                  $isSimpleButton
                />

                <Shimmer lines={['LT']} behaviour="linger" delay={0} />
              </div>
              <div
                style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}
              >
                <IconButton
                  src="/backward.svg"
                  title="Faster"
                  size="2.3rem"
                  $isStroked
                  $isSimpleButton
                  onPointerUp={() =>
                    setTravelSpeed((travelSpeed) => travelSpeed / 1.5)
                  }
                />
                <IconButton
                  src={`/${isTravelling ? 'pause' : 'play'}.svg`}
                  title={isTravelling ? 'Pause' : 'Play'}
                  size={isTravelling ? '2.4rem' : '2rem'}
                  $isStroked
                  $isSimpleButton
                  onPointerUp={() => setIsTravelling(!isTravelling)}
                />
                <IconButton
                  src="/backward.svg"
                  title="Faster"
                  size="2.3rem"
                  $isStroked
                  $isSimpleButton
                  $rotate={180}
                  onPointerUp={() =>
                    setTravelSpeed((travelSpeed) => travelSpeed * 1.5)
                  }
                />
              </div>
            </Banner>
          </PageGrid>
        </StyledHeader>
        <PageGrid>
          <ShimmerOuter>
            {isComplete && <Interact />}
            <div style={getShimmerOuterStyle()}>
              <Shimmer
                lines={tickerLines}
                behaviour="fade"
                delay={2000}
                holdFirst={4000}
                fadeTime={700}
                pause={3000}
                callback={() => setIsComplete(true)}
              />
            </div>
          </ShimmerOuter>
          <div style={{ margin: '1rem' }}>
            <Grid>
              {skillset.map(({ title, subTitle, summary, bullets }) => (
                <Card key={title} {...{ title, subTitle }} $isClear>
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
