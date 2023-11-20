import IconButton from '@pi-lib/icon-button'
import { ICONS } from '@pi-lib/constants'
import ItemList from '../ItemList'
import { CLOUDFRONT_URL } from '../../main'

export const TechList = () => {
  return (
    <div style={{ padding: '12px' }}>
      <ItemList doWrap>
        {Object.entries(ICONS).map(([title, href], i) => {
          const src = `${CLOUDFRONT_URL}/${title
            .split(' ')
            .join('-')
            .toLowerCase()}.svg`
          return (
            !!title && (
              <IconButton
                key={title}
                iconProps={{ height: '2rem' }}
                isExternal
                {...{ src, href, title }}
              />
            )
          )
        })}
      </ItemList>
    </div>
  )
}
export default TechList
