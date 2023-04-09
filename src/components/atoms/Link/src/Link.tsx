import { FC } from 'react'
import { StyledLink } from './Link.style'
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({
  href,
  isExternal,
  children,
}: LinkProps) => (
  <StyledLink {...{ href }} target={isExternal ? '_blank' : undefined}>
    {children}{' '}
  </StyledLink>
)

export default Link
