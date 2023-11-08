'use client'
import Stellar from '@pi-lib/stellar'
import Grid from '@pi-lib/grid'
import Interact from '@/components/Interact'
import Shimmer from '@pi-lib/shimmer'
import { useState } from 'react'

export default function Home() {
  const [isComplete, setIsComplete] = useState(false)
  return (
    <div style={{ height: '100vh' }}>
      <Stellar isTravelling={true}>
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
          <Grid>
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                style={{ border: '1px solid green', padding: '8px' }}
              >
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
              </div>
            ))}
          </Grid>
        </main>
      </Stellar>
    </div>
  )
}
