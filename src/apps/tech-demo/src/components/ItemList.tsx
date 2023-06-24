import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ItemListProps extends PropsWithChildren {
  title?: string
  doWrap?: boolean
}

const StyledItemList = styled.div`
  display: flex;
  gap: 8px;
  ${({ doWrap }: Pick<ItemListProps, 'doWrap'>) =>
    !!doWrap ? 'flex-wrap: wrap;' : 'justify-content: flex-end;'}
`

export const ItemList = ({ children, title, doWrap }: ItemListProps) => (
  <StyledItemList {...{ title, doWrap }}>{children}</StyledItemList>
)
