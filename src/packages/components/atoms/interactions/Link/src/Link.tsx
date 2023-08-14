import { FC } from 'react'
import { StyledRouterLink, getStyledLink } from './Link.style'
import { LinkProps } from './Link.types'

/**
 * A React component for a router optional link
 */
export const Link: FC<LinkProps> = ({
  $isExternal = false,
  $isMain = false,
  $isInactive = false,
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
