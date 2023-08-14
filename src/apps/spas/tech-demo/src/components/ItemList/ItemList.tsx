import { ItemListProps } from './IndexList.types'
import { StyledItemList } from './ItemList.style'

/**
 * Container for a list of items
 */
export const ItemList = ({ children, title, doWrap }: ItemListProps) => (
  <StyledItemList {...{ title, doWrap }}>{children}</StyledItemList>
)

export default ItemList
