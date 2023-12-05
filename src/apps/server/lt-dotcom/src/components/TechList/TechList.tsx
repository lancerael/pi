import Carousel from '@pi-lib/carousel'
import { ICONS_EXTENDED } from '@pi-lib/constants'
import IconButton from '@pi-lib/icon-button'
import { ReactElement } from 'react'
import { TravelTrackerProps } from '../PageHeader/PageHeader.types'

/**
 * Get an array of icons for the tech list
 */
const itemList = Object.entries(ICONS_EXTENDED)
  .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
  .map(([title, href], i) => {
    const src = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}${title
      .split(' ')
      .join('-')
      .toLowerCase()}.svg`
    return (
      !!title && (
        <IconButton
          key={title}
          buttonProps={{
            isExternal: true,
            boxName: 'light',
            href,
            title,
          }}
          iconProps={{ src, height: '2rem' }}
        />
      )
    )
  })
  .filter(Boolean) as ReactElement[]

export const TechList = ({
  travelSpeed: speed,
  isTravelling: isScroller,
}: TravelTrackerProps) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <Carousel {...{ itemList, speed, isScroller }} />
    </div>
  )
}

export default TechList