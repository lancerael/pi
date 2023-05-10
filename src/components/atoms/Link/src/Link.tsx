import { FC } from 'react'
import { StyledLink } from './Link.style'
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({
  isExternal,
  isMain,
  children,
  ...linkProps
}: LinkProps) => (
  <StyledLink
    {...{ ...linkProps, isMain }}
    target={isExternal ? '_blank' : undefined}
  >
    {children}{' '}
  </StyledLink>
)

export default Link
