import styled from 'styled-components'
import { ItemListProps } from './IndexList.types'

/**
 * Wrapper element for the list of items
 */
export const StyledItemList = styled.div`
  display: flex;
  gap: 8px;
  ${({ doWrap }: Pick<ItemListProps, 'doWrap'>) =>
    !!doWrap ? 'flex-wrap: wrap;' : 'justify-content: flex-end;'}
`
