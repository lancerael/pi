import { getTransientProps } from '@pi-lib/styles'
import { StyledRouterLink, getStyledLink } from './Link.style'
import { LinkProps } from './Link.types'

/**
 * Link is a React component that renders a stylable link element. It can be used for both internal (router) and external links.
 * The component can be styled differently based on whether it's an external link, a main link, or inactive.
 *
 * @param {LinkProps} props - The properties for the Link component.
 * @returns {JSX.Element} A styled link element based on the provided properties.
 */
export const Link = ({
  isExternal = false,
  isMain = false,
  isInactive = false,
  color,
  to,
  dataTestid = 'pi-lib-link',
  children,
  ...linkProps
}: LinkProps) => {
  const StyledLink = getStyledLink(!!isInactive)
  const props = {
    ...linkProps,
    'target': isExternal ? '_blank' : undefined,
    'data-testid': dataTestid,
    ...getTransientProps({
      isMain,
      color,
      isInactive,
    }),
    children,
  }
  return !!to ? (
    <StyledRouterLink {...{ ...props, to }} />
  ) : (
    <StyledLink {...props} />
  )
}

export default Link
