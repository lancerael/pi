import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ItemListProps extends PropsWithChildren {
  title?: string
  wrap?: boolean
}

const StyledItemList = styled.div`
  display: flex;
  gap: 8px;
  ${({ wrap }: Pick<ItemListProps, 'wrap'>) =>
    !!wrap ? 'flex-wrap: wrap;' : 'justify-content: flex-end;'}
`

export const ItemList = ({ children, title, wrap }: ItemListProps) => (
  <StyledItemList {...{ title, wrap }}>{children}</StyledItemList>
)
