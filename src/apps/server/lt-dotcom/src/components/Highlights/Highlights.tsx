import { careerHighlights } from '@/data/careerHighlights'
import Card from '@pi-lib/card'
import Grid from '@pi-lib/grid'
import PageSection from '../PageSection'
import { StyledList } from './Highlights.style'
import { memo } from 'react'

export const Highlights = memo(() => {
  return (
    <PageSection title={'Career Highlights'}>
      <Grid>
        {careerHighlights.map(({ title, subTitle, summary, bullets }) => (
          <Card key={title} {...{ title, subTitle }}>
            {summary}
            <StyledList>
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </StyledList>
          </Card>
        ))}
      </Grid>
    </PageSection>
  )
})

export default Highlights
