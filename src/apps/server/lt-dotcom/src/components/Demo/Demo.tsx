import Card from '@pi-lib/card'
import Grid from '@pi-lib/grid'
import Link from '@pi-lib/link'
import { StyledImages } from './Demo.styles'

export const Demo = () => {
  return (
    <Card
      title="Open source"
      subTitle="JavaScript tools and libraries"
      style={{ margin: '0 0 5rem', padding: '3rem' }}
    >
      <Grid>
        <div>
          <div>
            <strong>Pi Charts</strong> - JS Charting Library
          </div>
          <div>
            <strong>Pi Lib</strong> - React Component Library
          </div>
          <br />
          <br />
          <Link
            style={{ fontSize: '2rem' }}
            href="http://demo.lance-taylor.com"
            isMain
          >
            Click for Tech Demo
          </Link>
          <br />
          <br />
          <br />
          <br />
        </div>
        <StyledImages>
          <img src="/demo1.png" alt="Demo 1 diagram" />
          <img src="/demo2.png" alt="Demo 1 diagram" />
          <img src="/demo3.png" alt="Demo 1 diagram" />
        </StyledImages>
      </Grid>
    </Card>
  )
}

export default Demo
