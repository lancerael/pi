import styled from 'styled-components'
import { StyledItemListProps } from './ItemList.styles.types'

/**
 * Wrapper element for the list of items
 */
export const StyledItemList = styled.div<StyledItemListProps>`
  display: flex;
  gap: 8px;
  ${({ doWrap }) =>
    !!doWrap ? 'flex-wrap: wrap;' : 'justify-content: flex-end;'}
`
