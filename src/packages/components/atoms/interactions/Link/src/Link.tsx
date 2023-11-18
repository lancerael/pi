import { getTransientProps } from '@pi-lib/utils'
import { StyledRouterLink, getStyledLink } from './Link.style'
import { LinkProps } from './Link.types'

/**
 * Link is a React component that renders a stylable link element. It can be used for both internal (router) and external links.
 * The component can be styled differently based on whether it's an external link, a main link, or inactive.
 *
 * @param {LinkProps} props - The properties for the Link component.
 * @param {boolean} [props.isExternal=false] - Specifies if the link is an external link. Opens the link in a new tab if true.
 * @param {boolean} [props.isMain=false] - Indicates if the link is a main link, which may affect styling.
 * @param {boolean} [props.isInactive=false] - Indicates if the link is inactive, which may affect styling.
 * @param {string} [props.to] - The URL or path the link points to. Used for internal routing if present.
 * @param {string} [props.dataTestid] - The test id attribute for e2e testing
 * @param {React.ReactNode} props.children - The content to be displayed inside the link.
 * @param {...object} linkProps - Additional props to be spread into the link element.
 * @returns {JSX.Element} A styled link element based on the provided properties.
 */
export const Link = ({
  isExternal = false,
  isMain = false,
  isInactive = false,
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
