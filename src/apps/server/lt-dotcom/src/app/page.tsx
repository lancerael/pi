'use client'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Interact from '@/components/Interact'
import Shimmer from '@pi-lib/shimmer'
import Card from '@pi-lib/card'
import { CSSProperties, useRef, useState } from 'react'
import { tickerLines } from '@/data/tickerLines'
import { careerHighlights } from '@/data/careerHighlights'
import Banner from '@pi-lib/banner'

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const getShimmerWrapperStyle = (): CSSProperties => {
    const isShimmerAtLimit =
      wrapperRef.current &&
      scrollTop > (wrapperRef.current?.offsetHeight ?? 0) / 2 - 36
    return {
      position: isShimmerAtLimit ? 'absolute' : 'fixed',
      top: isShimmerAtLimit ? 'calc(100vh - 48px)' : undefined,
      transition: 'none',
    }
  }

  return (
    <div style={{ height: '100vh' }} ref={wrapperRef}>
      <Stellar isTravelling={true} scrollCallback={setScrollTop}>
        <main style={{ height: '100%', maxWidth: '1024px', margin: '0 auto' }}>
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
          <Grid>
            {careerHighlights.map(({ title, subTitle, summary, bullets }) => (
              <Card key={title} {...{ title, subTitle }}>
                {summary}
                <ul style={{ padding: '1rem' }}>
                  {bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
          <Banner>
            <div>Something 1</div>
            <div>Something 2</div>
            <div>Something 3</div>
          </Banner>
        </main>
      </Stellar>
    </div>
  )
}
