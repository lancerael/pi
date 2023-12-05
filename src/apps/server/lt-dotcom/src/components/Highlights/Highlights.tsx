import { careerHighlights } from '@/data/careerHighlights'
import Card from '@pi-lib/card'
import Grid from '@pi-lib/grid'
import Shimmer from '@pi-lib/shimmer'

export const Highlights = () => {
  return (
    <div style={{ margin: '3rem 0 1rem' }}>
      <div className="is-title" style={{ textAlign: 'center', margin: '2rem' }}>
        <Shimmer lines={['Career Highlights']} behaviour="linger" delay={0} />
      </div>
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
    </div>
  )
}

export default Highlights
