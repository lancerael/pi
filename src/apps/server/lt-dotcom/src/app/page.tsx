'use client'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Interact from '@/components/Interact'
import Shimmer from '@pi-lib/shimmer'
import Card from '@pi-lib/card'
import { CSSProperties, useRef, useState } from 'react'

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const getShimmerWrapperStyle = (): CSSProperties => {
    const isShimmerAtLimit =
      wrapperRef.current &&
      scrollTop > (wrapperRef.current?.offsetHeight ?? 0) / 2 - 48
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
                lines={[
                  'Lance Taylor',
                  'Software Engineer',
                  'Senior / Lead',
                  'Full stack / FE',
                  'React, Typescript, NodeJS',
                  'CI/CD, TDD/BDD, AWS/Azure',
                  'Agile, Kanban, Scrum',
                  'UI/UX, Accessibility',
                  ' ',
                  'Interact, or scroll down...',
                ]}
                behaviour="fade"
                delay={2500}
                callback={() => setIsComplete(true)}
              />
            </div>
          </div>
          <Grid>
            {Array.from({ length: 40 }, (_, i) => (
              <Card key={i} title={'Vodafone'} subTitle={'Senior/Lead/Manager'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                eget tempor enim, ultrices tristique est. Praesent faucibus et
                leo ut malesuada. Sed vitae sodales erat. Phasellus id arcu sed
                ligula tristique commodo. Donec pellentesque pharetra elit a
                porta. Aenean porta augue ac sapien posuere, at lobortis est
                gravida. Curabitur scelerisque nunc quis ultricies consectetur.
                Sed eget auctor sapien, id tempus lectus. Etiam hendrerit tellus
                non accumsan faucibus. Curabitur faucibus ligula eu tempor
                viverra. Morbi rhoncus pulvinar turpis, vitae posuere risus
                interdum quis.
              </Card>
            ))}
          </Grid>
        </main>
      </Stellar>
    </div>
  )
}
