import { FC } from 'react'
import { StyledRouterLink, getStyledLink } from './Link.style'
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({
  $isExternal,
  $isMain,
  $isInactive,
  to,
  children,
  ...linkProps
}: LinkProps) => {
  const StyledLink = getStyledLink(!!$isInactive)
  const props = {
    ...linkProps,
    $isMain,
    $isInactive,
    target: $isExternal ? '_blank' : undefined,
    children,
  }
  return !!to ? (
    <StyledRouterLink {...{ ...props, to }} />
  ) : (
    <StyledLink {...props} />
  )
}

export default Link
