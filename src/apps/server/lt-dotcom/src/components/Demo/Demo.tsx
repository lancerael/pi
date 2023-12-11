import Card from '@pi-lib/card'
import Link from '@pi-lib/link'
import { StyledImages, StyledLinkWrapper } from './Demo.style'
import PageSection from '../PageSection'
import Grid from '@pi-lib/grid'

export const Demo = () => {
  return (
    <PageSection title={'Open Source'}>
      <Card title="Tech Demo" subTitle="JavaScript tools and libraries">
        <Grid>
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div>
              <strong>Pi Charts</strong> - <em>JS Charting</em>
            </div>
            <div>
              <strong>Pi Lib</strong> - <em>React Components</em>
            </div>
            <StyledLinkWrapper>
              <Link
                style={{ fontSize: '2rem' }}
                href="http://demo.lance-taylor.com"
                isMain
                isExternal
                title="Link to the Pi tech demo"
              >
                Click for Demo
              </Link>
            </StyledLinkWrapper>
          </div>
          <StyledImages>
            <img src="/demo1.png" alt="Demo 1 diagram" />
            <img src="/demo2.png" alt="Demo 2 diagram" />
            <img src="/demo3.png" alt="Demo 3 diagram" />
          </StyledImages>
        </Grid>
      </Card>
    </PageSection>
  )
}

export default Demo
