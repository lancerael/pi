import Card from '@pi-lib/card'
import Link from '@pi-lib/link'
import { StyledBlurb, StyledImages, StyledLinkWrapper } from './Demo.style'
import PageSection from '../PageSection'
import Grid from '@pi-lib/grid'
import { memo } from 'react'

export const Demo = memo(() => {
  return (
    <PageSection title={'Open Source'} className="pi-page-grid-full">
      <Card isClear>
        <Grid>
          <StyledBlurb>
            <div>
              All components seen here are from my own library. <br />
              Visit the sandbox for more in depth demos of:
              <ul>
                <li>Components and data visualisations</li>
                <li>Theming, light/dark and large text modes</li>
                <li>Devops setup with CI/CD, MFEs and more...</li>
              </ul>
              At any point you can view code, modules and Storybook from the
              footer.
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
})

export default Demo
