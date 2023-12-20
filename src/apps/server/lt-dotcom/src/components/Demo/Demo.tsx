import Card from '@pi-lib/card'
import Link from '@pi-lib/link'
import { StyledBlurb, StyledImages, StyledLinkWrapper } from './Demo.style'
import PageSection from '../PageSection'
import Grid from '@pi-lib/grid'

export const Demo = () => {
  return (
    <PageSection title={'Open Source'} className="pi-page-grid-full">
      <Card isClear>
        <Grid>
          <StyledBlurb>
            <div>
              All components seen here are from my own library. Visit the
              sandbox for more components and data visualisations, with theming
              and other customisations.
            </div>
            <StyledLinkWrapper>
              <Link
                style={{ fontSize: '2rem' }}
                href="http://demo.lance-taylor.com"
                isMain
                isExternal
                title="Link to the Pi tech demo"
              >
                Sandbox Demo
              </Link>
            </StyledLinkWrapper>
          </StyledBlurb>
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
