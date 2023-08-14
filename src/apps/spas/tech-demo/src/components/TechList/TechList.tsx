import IconButton from '@pi-lib/icon-button'
import ItemList from '../ItemList'
import { CLOUDFRONT_URL } from '../../main'
import { ICONS } from './TechList.constants'

export const Footer = () => {
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
              <IconButton key={title} isExternal {...{ src, href, title }} />
            )
          )
        })}
      </ItemList>
    </div>
  )
}
export default Footer
