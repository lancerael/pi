import { FC } from 'react'
import { StyledLink } from './Link.style'
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({
  isExternal,
  children,
  ...linkProps
}: LinkProps) => (
  <StyledLink {...linkProps} target={isExternal ? '_blank' : undefined}>
    {children}{' '}
  </StyledLink>
)

export default Link
