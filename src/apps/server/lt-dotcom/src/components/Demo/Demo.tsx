import Card from '@pi-lib/card'
import Link from '@pi-lib/link'
import { StyledChart, StyledLinkWrapper } from './Demo.style'
import PageSection from '../PageSection'
import Grid from '@pi-lib/grid'
import { useFakeApi } from '@pi-lib/candlestick-chart/src/hooks'
import CandlestickChart from '@pi-lib/candlestick-chart'

export const Demo = () => {
  const chartData = useFakeApi()
  return (
    <PageSection title={'Open Source'}>
      <Grid>
        <StyledChart>
          <CandlestickChart data={chartData} />
        </StyledChart>
        <Card title="Tech Demo" subTitle="JavaScript tools and libraries">
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div>
              The candlestick chart, touch controls and other components seen
              here are from my own library. Visit the sandbox to see more
              examples, theming and other customisations.
            </div>
            <StyledLinkWrapper>
              <Link
                style={{ fontSize: '2rem' }}
                href="http://demo.lance-taylor.com"
                isMain
                isExternal
                title="Link to the Pi tech demo sandbox"
              >
                Sandbox Demo
              </Link>
            </StyledLinkWrapper>
          </div>
        </Card>
      </Grid>
    </PageSection>
  )
}

export default Demo
