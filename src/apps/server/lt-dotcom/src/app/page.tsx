'use client'
import { CSSProperties, useRef, useState } from 'react'
import styled from 'styled-components'
import { gradient } from '@pi-lib/styles'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'
import PageGrid from '@pi-lib/page-grid'
import Banner from '@pi-lib/banner'
import Card from '@pi-lib/card'
import { tickerLines } from '@/data/tickerLines'
import { careerHighlights } from '@/data/careerHighlights'
import Interact from '@/components/Interact'
import { skillset } from '@/data/skillset'

const StyledFullGradient = styled.div`
  ${gradient({ isTransparent: true })}
  margin: 5rem 0;
  padding: 5rem 1rem;
`

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const scrollGap = 128
  const isShimmerAtLimit =
    wrapperRef.current &&
    scrollTop > (wrapperRef.current?.offsetHeight ?? 0) / 2 - scrollGap

  const getShimmerWrapperStyle = (): CSSProperties => {
    return {
      position: isShimmerAtLimit ? 'absolute' : 'fixed',
      top: isShimmerAtLimit ? `calc(100vh - ${scrollGap + 18}px)` : undefined,
      transition: 'none',
    }
  }

  return (
    <div style={{ height: '100vh' }} ref={wrapperRef}>
      <Stellar isTravelling={true} scrollCallback={setScrollTop}>
        <div
          style={{
            position: 'fixed',
            width: 'calc(100% - 18px)',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            margin: '1rem 0',
            top: '-1rem',
            opacity: isShimmerAtLimit ? 1 : 0,
          }}
        >
          <PageGrid>
            <div
              style={{
                background: 'rgba( 0, 0, 0, 0 )',
                backdropFilter: 'blur(4px)',
              }}
            >
              <Banner $useBackground={false}>
                <div
                  style={{
                    color: 'var(--special)',
                  }}
                >
                  Lance Taylor
                </div>
                <div
                  style={{
                    color: 'var(--special)',
                  }}
                >
                  ▶ ⏩ ⏪ 🔽 ⏸
                </div>
              </Banner>
            </div>
          </PageGrid>
        </div>
        <PageGrid>
          <div
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              display: 'flex',
            }}
          >
            {isComplete && <Interact />}
            <div style={getShimmerWrapperStyle()}>
              <Shimmer
                lines={tickerLines}
                behaviour="fade"
                delay={2500}
                callback={() => setIsComplete(true)}
              />
            </div>
          </div>
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
      </Stellar>
    </div>
  )
}
