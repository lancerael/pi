import IconButton from '@pi-lib/icon-button'
import { ICONS } from '@pi-lib/constants'
import { CLOUDFRONT_URL } from '../../main'
import Carousel from '@pi-lib/carousel'

export const TechList = () => {
  const itemList = Object.entries(ICONS)
    .map(([title, href], i) => {
      const src = `${CLOUDFRONT_URL}/${title
        .split(' ')
        .join('-')
        .toLowerCase()}.svg`
      return (
        !!title && (
          <IconButton
            key={title}
            iconProps={{ src, height: '2rem' }}
            buttonProps={{ href, title, isExternal: true }}
          />
        )
      )
    })
    .filter(Boolean) as JSX.Element[]
  return (
    <div style={{ padding: '1rem' }}>
      <Carousel {...{ itemList }} />
    </div>
  )
}
export default TechList
