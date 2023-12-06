import { careerHighlights } from '@/data/careerHighlights'
import Card from '@pi-lib/card'
import Grid from '@pi-lib/grid'
import PageSection from '../PageSection'

export const Highlights = () => {
  return (
    <PageSection title={'Career Highlights'}>
      <Grid>
        {careerHighlights.map(({ title, subTitle, summary, bullets }) => (
          <Card key={title} {...{ title, subTitle }}>
            {summary}
            <ul style={{ padding: '1rem 1rem 0', color: 'var(--textSoft)' }}>
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </PageSection>
  )
}

export default Highlights
